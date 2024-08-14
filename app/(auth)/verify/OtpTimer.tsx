"use client";

import { useEffect, useState } from "react";

const OtpTimer = () => {
  const [timeLeft, setTimeLeft] = useState(
    // parseInt(localStorage.getItem("vatp") || "0") || 300
    parseInt(localStorage.getItem("vatp") || "0") || 300
  ); // 300 seconds = 5 minutes

  useEffect(() => {
    if (timeLeft <= 0) return;
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        localStorage.setItem("vatp", (prevTime - 1).toString());
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <p
      className={`${
        !!(minutes == 0 && seconds == 0) && "text-red-500"
      } text-gray-600`}
    >
      Code expires in{" "}
      <span>
        {minutes}:{seconds}
      </span>{" "}
      minutes
    </p>
  );
};

export default OtpTimer;
