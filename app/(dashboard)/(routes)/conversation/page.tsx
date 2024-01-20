"use client";
import Heading from "@/components/Heading";
import * as z from "zod";
import { MessageSquare } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

import { formSchema } from "./constant";

const ConversationPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      username: "",
    },
  });

  return (
    <div>
      <Heading
        title="Conversation"
        description="Recent conversation"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8"></div>
    </div>
  );
};

export default ConversationPage;
