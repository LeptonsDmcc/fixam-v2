import React, { useState, useRef, ChangeEvent, KeyboardEvent } from "react";

const CodeInputs: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(5).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input if not the last one
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      } else {
        // Automatically verify when all digits are entered
        verifyOtp(newOtp.join(""));
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const verifyOtp = (otpCode: string) => {
    // console.log("Verifying OTP:", otpCode);
    // setTimeout(() => {
    //   alert(`YOUR OTP CODE IS: ${otpCode}`);
    // }, 500);
  };

  return (
    <div className="flex items-center justify-between gap-6">
      {otp.map((digit, index) => (
        <>
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            placeholder="."
            type="text"
            maxLength={1}
            className="w-[72px] h-[72px] rounded-lg border text-center text-3xl text-gray-400
           placeholder:text-[200px] placeholder:text-gray-400 focus:placeholder:text-transparent"
          />

          <input type="text" hidden value={otp} name="otp_code" />
        </>
      ))}
    </div>
  );
};

export default CodeInputs;
