import FooterMenu from "./FooterMenu";

const menus = [
  {
    to: "#",
    text: "Shop for Men",
  },
  {
    to: "#",
    text: "Shop for Women",
  },
  {
    to: "#",
    text: "Shop for Home",
  },
  {
    to: "#",
    text: "Shop for Food",
  },
];

const FooterCategories = () => {
  return <FooterMenu title="Categories" menus={menus} />;
};

export default FooterCategories;
