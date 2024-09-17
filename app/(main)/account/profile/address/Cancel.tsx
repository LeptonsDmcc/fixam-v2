"use client";

import BorderedOrangeButton from "@/app/components/Buttons/BorderedOrangeButton";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  full?: boolean;
}
const Cancel = ({ full }: Props) => {
  const router = useRouter();

  return (
    <BorderedOrangeButton full={full} onClick={() => router.back()}>
      Cancel
    </BorderedOrangeButton>
  );
};

export default Cancel;
