import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

// import Configuration from "openai";
// import OpenAIApi from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(Configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("unathorized user", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API key configured", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Message are required", { status: 400 });
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    });

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log("Conversation_error", error);
    return new NextResponse("Build in error", { status: 500 });
  }
}
