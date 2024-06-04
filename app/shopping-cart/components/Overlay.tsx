import Space from "@/app/components/Spacing/Space";
import { PropsWithChildren, useState } from "react";

const Overlay = ({ children }: PropsWithChildren) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  if (!show) return null;

  if (show)
    return (
      <div
        className="fixed top-0 bottom-0 right-0 left-0 bg-black/40
    z-50 flex items-center justify-center"
      >
        <div className="bg-white w-max p-8">
          <header className="flex justify-end">
            <button onClick={handleClose}>X</button>
          </header>
          <Space spacing="my-12" />
          {children}
        </div>
      </div>
    );
};

export default Overlay;
