import Image from "next/image";

import vendorBanner from "@/public/assets/banners/vendor-banner.png";
import logoBlack from "@/public/assets/fixamlogo-b.png";

const VendorStoreBanners = () => {
  return (
    <section className=" relative">
      <Image src={vendorBanner} alt="vendor banner" className="w-full" />
      <Image
        src={logoBlack}
        alt="vendor banner"
        height={76}
        width={76}
        className="absolute top-6 right-24"
      />
    </section>
  );
};

export default VendorStoreBanners;
