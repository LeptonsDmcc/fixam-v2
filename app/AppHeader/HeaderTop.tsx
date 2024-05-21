import SocialIcons from "../components/Icons/SocialIcons";
import HeaderAlertNews from "./HeaderAlertNews";
import HeaderTopActions from "./HeaderTopActions";

const HeaderTop = () => {
  return (
    <header className="py-3 border-b border-cultured">
      <section className="wrapper flex justify-between items-center">
        <SocialIcons />
        <HeaderAlertNews />
        <HeaderTopActions />
      </section>
    </header>
  );
};

export default HeaderTop;
