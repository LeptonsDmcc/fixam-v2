"use client";

import { CloseCircle } from "iconsax-react";
import { PropsWithChildren } from "react";

type MessageType = "info" | "error" | "success";

interface Props {
  type: MessageType;
  show: boolean;
}

const FixamMessage = ({ children, type, show }: PropsWithChildren<Props>) => {
  const mesObj: { [key in MessageType]: string } = {
    info: "text-gray-600 bg-gray-200",
    error: "text-red-600 bg-red-200",
    success: "text-green-600 bg-green-200",
  };

  return (
    <>
      {show && (
        <div
          className={`${mesObj[type]} p-2 rounded-md flex items-center justify-between`}
        >
          <span>{children}</span>
          {/* <CloseCircle
            className="cursor-pointer"
          /> */}
        </div>
      )}
    </>
  );
};

export default FixamMessage;
