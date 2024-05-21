import FooterMenu from "./FooterMenu";

const menus = [
  {
    to: "#",
    text: "No. 123 Fixam Stores Street, South Park Lane, Abuja, FCT",
  },
  {
    to: "#",
    text: "+2345678910",
  },
  {
    to: "#",
    text: "info@fixam.com",
  },
];

const FooterContact = () => {
  return (
    <div className="w-[200px]">
      <FooterMenu title="Contact" menus={menus} />
    </div>
  );
};

export default FooterContact;
