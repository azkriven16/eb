// import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { convertToModelMessages, streamText, UIMessage } from "ai";
import { portfolioContext } from "@/constants/ai-context";

export const maxDuration = 30;

// const openrouter = createOpenRouter({
//   apiKey: process.env.API_KEY,
//   baseURL: "https://openrouter.ai/api/v1",
// });

const google = createGoogleGenerativeAI({
  // custom settings
});

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google.chat("gemini-2.0-flash-lite"),
    messages: [
      { role: "system", content: portfolioContext }, // inject your info
      ...convertToModelMessages(messages),
    ],
  });

  return result.toUIMessageStreamResponse();
}
