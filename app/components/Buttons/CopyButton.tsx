"use client";

import { Copy } from "iconsax-react";
import { PropsWithChildren, useState } from "react";
import { toast } from "sonner";

interface Props {
  orderId: string;
}

const CopyButton = ({
  children,
  orderId,
}: Readonly<PropsWithChildren<Props>>) => {
  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(orderId);
      toast.message("Order ID Copied!", { position: "top-center" });
    } catch (err) {
      toast.error("Failed to copy!", { position: "top-center" });
    }
  };

  return (
    <button onClick={copyText} className="flex items-center gap-1">
      <span className=" select-none">{children}</span>
      <Copy size={18} className=" self-start" />
    </button>
  );
};

export default CopyButton;
