"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const Checkbox = () => {
  return (
    <label
      htmlFor="checkbox"
      className="h-6 w-6 rounded-md border-[1.5px] border-gray-900
      flex items-center justify-center cursor-pointer"
    >
      <FaCheck className="text-sm pointer-events-none" />
      <input id="checkbox" type="checkbox" hidden className="" />
    </label>
  );
};

export default Checkbox;
