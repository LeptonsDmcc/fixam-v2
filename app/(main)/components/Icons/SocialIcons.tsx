import { FaInstagram } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import SocialIcon from "./SocialIcon";

const icons = [
  <FaFacebookF key="1" />,
  <FaInstagram key="2" />,
  <FaXTwitter key="3" />,
];

interface Props {
  isMobile?: boolean;
}
const SocialIcons = ({ isMobile }: Props) => {
  return (
    <ul
      className={`${
        isMobile ? "flex gap-8" : "hidden"
      }  lg:flex items-center gap-2`}
    >
      {icons.map((icon, index) => (
        <SocialIcon key={index}>{icon}</SocialIcon>
      ))}
    </ul>
  );
};

export default SocialIcons;
