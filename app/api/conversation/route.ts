import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(Configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { message } = body;

    if (!userId) {
      return new NextResponse("unathorized user", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API key configured", { status: 500 });
    }

    if (!message) {
      return new NextResponse("Message are required", { status: 400 });
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    });
  } catch (error) {
    console.log("Conversation_error", error);
    return new NextResponse("Build in error", { status: 500 });
  }
}