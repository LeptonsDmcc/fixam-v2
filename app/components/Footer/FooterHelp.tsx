import FooterMenu from "./FooterMenu";

const menus = [
  {
    to: "#",
    text: "Customer Support",
  },
  {
    to: "#",
    text: "Delivery Details",
  },
  {
    to: "#",
    text: "Terms & Conditions",
  },
  {
    to: "#",
    text: "Privacy Policy",
  },
];

const FooterHelp = () => {
  return <FooterMenu title="Help" menus={menus} />;
};

export default FooterHelp;
