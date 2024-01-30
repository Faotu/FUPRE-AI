import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
// import { Configuration, OpenAIApi } from "openai";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // if (!configuration.apiKey) {
    //   return new NextResponse("OpenAI API Key not configured.", {
    //     status: 500,
    //   });
    // }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const response = await openai.chat.completions.create({
      // model: "gpt-3.5-turbo",
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "user",
          content: "",
        },
      ],
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("Conversation_error", error);
    return new NextResponse("Build in error", { status: 500 });
  }
}
