"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat } from "@ai-sdk/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  FiAlertCircle,
  FiRotateCcw,
  FiSend,
  FiMoon,
  FiSun,
  FiExternalLink,
} from "react-icons/fi";
import { useTheme } from "next-themes";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Input } from "./ui/input";

// --- Typing Indicator ---
function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-3 py-2 bg-muted/60 rounded-full w-fit">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 bg-foreground/70 rounded-full"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
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
    resumeStream,
  } = useChat();
  const [paused, setPaused] = useState(false);
  const { theme, setTheme } = useTheme();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Auto-focus input field when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Handle keypress anywhere on the page to focus input
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Don't interfere with keyboard shortcuts or special keys
      if (
        e.ctrlKey ||
        e.metaKey ||
        e.altKey ||
        e.key === "Tab" ||
        e.key === "Escape"
      ) {
        return;
      }

      // Don't focus if already focused or if typing in another input
      if (
        document.activeElement === inputRef.current ||
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      // Focus input for printable characters
      if (e.key.length === 1 && inputRef.current) {
        inputRef.current.focus();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  const handleStopResume = () => {
    if (!paused) {
      stop();
      setPaused(true);
    } else {
      resumeStream();
      setPaused(false);
    }
  };

  const suggestions = [
    "Tell me about your experience",
    "Show me your projects",
    "What technologies do you use?",
    "Give me a summary about you",
  ];

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="fixed w-full z-10 top-0 border-b p-4 flex items-center justify-between bg-background/70 backdrop-blur">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <FiExternalLink className="w-4 h-4" />
          <span className="hidden sm:inline">Euger's Portfolio</span>
        </a>

        <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
          <span className="text-primary">Euger</span>GPT
        </h1>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2"
        >
          <FiSun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <FiMoon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </header>

      {/* Error Banner */}
      <AnimatePresence>
        {error && (
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
            <p className="mt-1 break-words">{error.message}</p>
            <Button
              variant="secondary"
              size="sm"
              onClick={clearError}
              className="mt-2"
            >
              Dismiss
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Area */}
      <ScrollArea className="flex-1 p-4 mt-20">
        <div className="space-y-6 max-w-3xl mx-auto">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground gap-6">
              <div>
                <h2 className="text-2xl sm:text-4xl font-semibold text-foreground">
                  Welcome to <span className="text-primary">EugerGPT</span>
                </h2>
                <p className="text-sm sm:text-lg mt-2">
                  Your personal portfolio assistant. Ask me about Euger&apos;s
                  skills, projects, or experience.
                </p>
              </div>

              {/* Improved suggestions layout for mobile */}
              <div className="flex flex-col gap-3 w-full max-w-lg px-4 sm:px-0">
                {suggestions.map((s, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    size="sm"
                    className="rounded-full text-xs sm:text-sm py-2 px-4 h-auto whitespace-normal text-center leading-relaxed"
                    onClick={() => sendMessage({ text: s })}
                  >
                    {s}
                  </Button>
                ))}
              </div>
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
                    className={`max-w-[85%] rounded-xl px-4 py-3 text-sm shadow-sm ${
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
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex items-center gap-3 mt-2">
                  <TypingIndicator />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleStopResume}
                    className="text-xs"
                  >
                    Stop
                    {/* "{paused ? "Resume" : "Stop"}" */}
                  </Button>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
      </ScrollArea>

      {/* Input Box */}
      <footer className="border-t bg-background p-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim() && !isLoading) {
              sendMessage({ text: input });
              setInput("");
            }
          }}
          className="flex gap-2 max-w-3xl mx-auto"
        >
          <Input
            ref={inputRef}
            className="flex-1 resize-none rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Message EugerGPT..."
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
            className="rounded-xl px-4"
          >
            <FiSend className="w-5 h-5" />
          </Button>
        </form>
        <p className="text-center text-[11px] text-muted-foreground mt-2">
          EugerGPT may make mistakes. Consider verifying important information.
        </p>
      </footer>
    </div>
  );
}
