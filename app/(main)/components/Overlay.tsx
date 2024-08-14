"use client";

interface Props {
  shouldOverlay: boolean;
  onClick?: () => void;
}
const Overlay = ({ shouldOverlay, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`overlay
        ${
          shouldOverlay
            ? "opacity-1 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
          fixed top-0 left-0 w-full
          h-screen bg-black/40
            z-40
          duration-500 ease`}
    ></div>
  );
};

export default Overlay;
