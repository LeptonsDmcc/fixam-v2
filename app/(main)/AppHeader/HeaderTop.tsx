import SocialIcons from "../components/Icons/SocialIcons";
import HeaderAlertNews from "./HeaderAlertNews";

const HeaderTop = () => {
  return (
    <header className="py-3 border-b border-cultured">
      <section className="wrapper flex justify-between items-center">
        <SocialIcons />
        <HeaderAlertNews />
        <div></div>
        {/* <HeaderTopActions /> */}
      </section>
    </header>
  );
};

export default HeaderTop;
