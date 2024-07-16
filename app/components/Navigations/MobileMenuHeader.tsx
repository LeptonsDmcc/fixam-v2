import { Add } from "iconsax-react";
import Logo from "../Logo";

interface Props {
  onCloseMenu?: () => void;
}
const MobileMenuHeader = ({ onCloseMenu }: Props) => {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <Add className="rotate-45" onClick={onCloseMenu} />
    </header>
  );
};

export default MobileMenuHeader;
