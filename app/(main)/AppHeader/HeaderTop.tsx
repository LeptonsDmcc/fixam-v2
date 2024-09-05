import SocialIcons from "@/app/components/Icons/SocialIcons";
import HeaderAlertNews from "./HeaderAlertNews";

interface Props {
  name?: string;
}
const HeaderTop = ({ name }: Props) => {
  return (
    <header className="py-3 border-b border-cultured">
      <section className="wrapper flex justify-between items-center">
        <SocialIcons />
        <HeaderAlertNews />
        {name ? (
          <p className="text-sm">
            <span className="text-gray-400 ">Welcome:</span> {name}
          </p>
        ) : (
          <div></div>
        )}
        {/* <HeaderTopActions /> */}
      </section>
    </header>
  );
};

export default HeaderTop;
