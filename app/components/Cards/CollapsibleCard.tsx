"use client";
import { PropsWithChildren, useState } from "react";
import BarButton from "../Buttons/BarButton";
import Card from "../Card";

interface Props {
  heading: string;
}

const CollapsibleCard = ({ heading, children }: PropsWithChildren<Props>) => {
  const [collapse, setIsCollaps] = useState(true);
  return (
    <Card>
      <header className="flex items-center justify-between pr-4">
        <h3 className="font-semibold">{heading}</h3>
        <div
          onClick={() => setIsCollaps(!collapse)}
          className="px-2 py-3 rounded-md hover:bg-gray-100 duration-300
           cursor-pointer"
        >
          <BarButton />
        </div>
      </header>

      <div className={`${collapse ? "block max-h-fit" : "max-h-0 hidden"}`}>
        {children}
      </div>
    </Card>
  );
};

export default CollapsibleCard;
