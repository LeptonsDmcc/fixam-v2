import { PropsWithChildren } from "react";

interface Props {
  showMenu: boolean;
}

const DrawerWrapper = ({ showMenu, children }: PropsWithChildren<Props>) => {
  return (
    <section
      className={`${
        showMenu ? "w-full" : "w-0 overflow-hidden"
      }   h-screen bg-white  duration-300
      fixed top-0 bottom-0 left-0 right-0 z-50`}
    >
      {children}
    </section>
  );
};

export default DrawerWrapper;
