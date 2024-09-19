"use client";

import SectionSpacing from "../components/Spacing/SectionSpacing";
import Wrapper from "../components/Wrapper";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

const error = ({ error, reset }: Props) => {
  // useEffect(() => {
  //   // TODO: Log the error to an error reporting service
  //   console.error(error);
  //   console.error("Message", error.message);
  // }, [error]);

  return (
    <Wrapper>
      <SectionSpacing />
      <h2>
        {error.message.toLowerCase().includes("fetch failed") ||
        error.message.toLowerCase().includes("network")
          ? "Network Error"
          : "Something went wrong!"}
      </h2>
      <button onClick={reset} className="text-orange-400">
        Try Again
      </button>
      <SectionSpacing />
    </Wrapper>
  );
};

export default error;
