import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import SocialIcon from "./SocialIcon";

const icons = [
  <FaFacebookF key="1" />,
  <FaInstagram key="2" />,
  <FaXTwitter key="3" />,
];
const SocialIcons = () => {
  return (
    <ul className="hidden lg:flex items-center gap-1">
      {icons.map((icon, index) => (
        <SocialIcon key={index}>{icon}</SocialIcon>
      ))}
    </ul>
  );
};

export default SocialIcons;
