import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { convertToModelMessages, streamText, UIMessage } from "ai";

export const maxDuration = 30;

const openrouter = createOpenRouter({
  apiKey: process.env.API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

// Example personal info
const portfolioContext = `
You are an AI assistant representing Euger Bonete.
You answer questions about his skills, experience, and projects in a professional but friendly tone.

Euger’s Background:
- Location: Philippines
- Tech Stack: Next.js, React, TailwindCSS, TypeScript, Node.js
- AI: LangChain, OpenAI, DeepSeek, vector databases
- Projects: Portfolio website, chatbot assistant, YouTube video scripting
- Interests: Web development, AI, UI/UX, automation

If someone asks about him, answer based only on this information. 
If you don’t know something, politely say you don’t have that info.
`;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: openrouter.chat("openai/gpt-oss-20b:free"),
    messages: [
      { role: "system", content: portfolioContext }, // inject your info
      ...convertToModelMessages(messages),
    ],
  });

  return result.toUIMessageStreamResponse();
}
