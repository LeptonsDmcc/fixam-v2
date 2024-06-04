import HR from "../HR";
import Space from "../Spacing/Space";
import Wrapper from "../Wrapper";
import FooterCategories from "./FooterCategories";
import FooterCompany from "./FooterCompany";
import FooterCompanyBIO from "./FooterCompanyBIO";
import FooterContact from "./FooterContact";
import FooterHelp from "./FooterHelp";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16">
      <Wrapper>
        <div className="flex justify-between  gap-24">
          <div className="w-[363px]">
            <FooterCompanyBIO />
          </div>

          <div className="flex justify-between w-full">
            <FooterCompany />
            <FooterHelp />
            <FooterCategories />
            <FooterContact />
          </div>
        </div>
        <Space spacing=" my-20" />
        <HR color="orange" />
        <Space spacing=" my-20" />
        <p className="text-gray-300 text-center">
          Copyright © 2024 fixam.com. All rights reserved
        </p>
      </Wrapper>
    </footer>
  );
};

export default Footer;
