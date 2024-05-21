import React from "react";
import FooterMenu from "./FooterMenu";

const menus = [
  {
    to: "#",
    text: "About",
  },
  {
    to: "#",
    text: "Our Story",
  },
  {
    to: "#",
    text: "Blog",
  },
  {
    to: "#",
    text: "Journal",
  },
];
const FooterCompany = () => {
  return <FooterMenu title="Company" menus={menus} />;
};

export default FooterCompany;
