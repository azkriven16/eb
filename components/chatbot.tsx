"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat } from "@ai-sdk/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { FiAlertCircle, FiRotateCcw, FiSend } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Input } from "./ui/input";

// --- Typing Indicator Component ---
function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-3 py-2 bg-muted rounded-lg w-fit">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 bg-foreground/70 rounded-full"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 1.2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

export function ChatBot() {
  const [input, setInput] = useState("");
  const {
    messages,
    sendMessage,
    error,
    clearError,
    status,
    stop,
    regenerate,
    setMessages,
    resumeStream,
  } = useChat();
  const [paused, setPaused] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isLoading = status === "streaming" || status === "submitted";

  const handleStopResume = () => {
    if (!paused) {
      stop(); // stop the stream
      setPaused(true);
    } else {
      resumeStream(); // resume the stream
      setPaused(false);
    }
  };
  const suggestions = [
    "Tell me about your experience",
    "Show me your projects",
    "What technologies do you use?",
    "Give me a summary about you",
  ];

  const handleSuggestionClick = (text: string) => {
    if (!isLoading) {
      sendMessage({ text });
      setInput("");
    }
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 max-w-6xl h-screen flex flex-col rounded-lg">
      {/* Error */}
      <AnimatePresence>
        {error && (
          <ScrollArea className="flex-1 p-4 h-[200px]">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="m-3 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive"
            >
              <div className="flex items-center gap-2 font-medium">
                <FiAlertCircle className="w-4 h-4" />
                Error
              </div>
              <p className="mt-1 break-words overflow-wrap-anywhere">
                {error.message}
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={clearError}
                className="mt-2"
              >
                Dismiss
              </Button>
            </motion.div>
          </ScrollArea>
        )}
      </AnimatePresence>

      {/* Messages */}
      <ScrollArea className="flex-1 p-2 sm:p-4">
        <div className="space-y-4 min-h-full">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] gap-4 sm:gap-6 text-muted-foreground px-2">
              <div className="text-center space-y-2 sm:space-y-4 max-w-2xl">
                <h1 className="text-2xl sm:text-4xl font-bold text-foreground">
                  Portfolio Assistant
                </h1>
                <p className="text-sm sm:text-lg text-muted-foreground">
                  Ask me anything about Euger&apos;s experience, projects, and
                  skills.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-md sm:max-w-none sm:flex sm:flex-wrap sm:justify-center">
                {suggestions.map((s, i) => (
                  <Button
                    key={i}
                    variant="secondary"
                    size="sm"
                    className="rounded-full text-xs sm:text-sm whitespace-nowrap"
                    onClick={() => handleSuggestionClick(s)}
                  >
                    {s}
                  </Button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (input.trim() && !isLoading) {
                    sendMessage({ text: input });
                    setInput("");
                  }
                }}
                className="hidden sm:flex w-full gap-2 mt-2 sm:mt-4"
              >
                <Input
                  className="flex-1 resize-none rounded-md border bg-background px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Ask me anything..."
                  value={input}
                  onChange={(e) => setInput(e.currentTarget.value)}
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  size="icon"
                >
                  <FiSend className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </form>
            </div>
          ) : (
            <>
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[90%] sm:max-w-[80%] ${
                      message.role === "user" ? "order-2" : "order-1"
                    }`}
                  >
                    <div
                      className={`rounded-lg px-3 sm:px-4 py-2 text-sm ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      {message.parts.map((part, i) =>
                        part.type === "text" ? (
                          <ReactMarkdown
                            key={`${message.id}-${i}`}
                            remarkPlugins={[remarkGfm]}
                          >
                            {part.text}
                          </ReactMarkdown>
                        ) : null
                      )}
                    </div>

                    {/* Regenerate button */}
                    {message.role === "assistant" &&
                      index === messages.length - 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => regenerate()}
                          disabled={isLoading}
                          className="mt-1 text-xs text-muted-foreground hover:text-foreground"
                        >
                          <FiRotateCcw className="w-3 h-3 mr-1" />
                          Regenerate
                        </Button>
                      )}
                  </div>
                </motion.div>
              ))}
              {/* Typing Indicator + Stop/Resume */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 justify-start"
                >
                  <TypingIndicator />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleStopResume}
                    className="text-xs"
                  >
                    {paused ? "Resume" : "Stop"}
                  </Button>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </>
          )}
        </div>
      </ScrollArea>

      <div
        className={`border-t p-2 sm:p-3 ${
          messages.length === 0 ? "sm:hidden" : ""
        }`}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim() && !isLoading) {
              sendMessage({ text: input });
              setInput("");
            }
          }}
          className="flex gap-2"
        >
          <Input
            className={`flex-1 resize-none rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
              messages.length === 0
                ? "px-4 py-4 text-base placeholder:text-base" // Larger input when no messages
                : "px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base" // Normal size with messages
            }`}
            placeholder={
              messages.length === 0
                ? "Ask me anything..."
                : "Type your message..."
            }
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
            disabled={isLoading}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                if (input.trim() && !isLoading) {
                  sendMessage({ text: input });
                  setInput("");
                }
              }
            }}
          />
          <Button
            type="submit"
            disabled={!input.trim() || isLoading}
            size={messages.length === 0 ? "default" : "icon"}
            className={messages.length === 0 ? "px-4" : ""}
          >
            <FiSend className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
