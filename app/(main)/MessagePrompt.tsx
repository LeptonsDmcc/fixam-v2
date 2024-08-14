"use client";

import React from "react";
import { toast } from "sonner";

interface Props {
  message: string;
}

const MessagePrompt = ({ message }: Props) => {
  // Message when added in params
  if (message == "vok") {
    toast.success("Your account has been verified successfully :)", {
      position: "top-center",
    });
  }
  if (message == "lok") {
    toast.success("Logged in successful :)", {
      position: "top-center",
    });
  }
  return <></>;
};

export default MessagePrompt;
