import BaseSpacing from "@/app/components/Spacing/BaseSpacing";
import Space from "@/app/components/Spacing/Space";
import { PropsWithChildren, useState } from "react";

interface Props {
  handleCloseOverlay?: () => void;
}
const Overlay = ({
  handleCloseOverlay,
  children,
}: Readonly<PropsWithChildren<Props>>) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    if (handleCloseOverlay) handleCloseOverlay();
  };

  if (!show) return null;

  if (show)
    return (
      <div
        className=" fixed top-0 bottom-0 right-0 left-0 bg-black/80
        z-50 flex items-center justify-center"
      >
        <div className="bg-white w-max p-8 rounded-lg">
          <header className="flex justify-end">
            <button onClick={handleClose} className="font-semibold">
              X
            </button>
          </header>
          <BaseSpacing />
          {children}
        </div>
      </div>
    );
};

export default Overlay;
