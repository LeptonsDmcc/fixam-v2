"use client";

import BorderedOrangeButton from "@/app/components/Buttons/BorderedOrangeButton";
import { useRouter } from "next/navigation";
import React from "react";

const Cancel = () => {
  const router = useRouter();

  return (
    <BorderedOrangeButton full onClick={() => router.back()}>
      Cancel
    </BorderedOrangeButton>
  );
};

export default Cancel;
