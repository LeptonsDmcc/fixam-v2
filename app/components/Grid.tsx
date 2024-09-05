import { PropsWithChildren } from "react";

interface Props {
  cols: number;
}
const Grid = ({ cols, children }: PropsWithChildren<Props>) => {
  const grid: { [key: number]: string } = {
    2: "grid-cat-showcase",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-4",
  };
  return <section className={`${grid[cols]} grid gap-5`}>{children}</section>;
};

export default Grid;
