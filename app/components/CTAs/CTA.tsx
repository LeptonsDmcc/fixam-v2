import Image from "next/image";
import Space from "../Space";

const CTA = () => {
  return (
    <div
      className="cta-container
    
      relative
      aspect-5-6
      rounded-md overflow-hidden mb-[25px]

      sm:aspect-6-5
      sm:mb-0

    lg:min-w-[calc(50%-15px)] lg:w-[calc(50%-15px)] lg:mb-0

    xl:min-w-[calc(50%-20px)] xl:w-[calc(50%-20px)] xl:aspect-[unset]
    "
    >
      <Image
        src="/assets/banners/cta-banner.jpg"
        fill
        alt="summer collection"
        className="cta-banner
      w-full h-full object-cover
      "
      />

      <a
        href="#"
        className="cta-content
      
      bg-[rgba(255,255,255,0.7)] absolute top-1/2 left-1/2
      -translate-y-[50%] -translate-x-[50%] w-fit py-[15px] px-[20px]
      text-center rounded-sm
      
      "
      >
        <p
          className="discount
        
        bg-gray-800 text-white text-xs font-medium uppercase w-max
        m-auto py-0 px-[5px] rounded-md mb-[5px]

        sm:text-[0.875rem] sm:py-[5px] sm:px-[10px]
        
        "
        >
          25% Discount
        </p>
        <Space spacing="my-2" />
        <h2
          className="cta-title

          text-gray-600 text-xl capitalize mb-[5px]
          
          sm:text-[1.5rem]"
        >
          Summer collection
        </h2>
        <Space spacing="my-4" />
        <p
          className="cta-text

          text-gray-500 text-sm mb-[5px]

        sm:text-[1rem]
        "
        >
          Starting @ $10
        </p>
        <Space spacing="my-4" />
        <button
          className="cta-btn

          text-xs text-gray-500 uppercase font-bold m-auto

          sm:text-[1rem]"
        >
          Shop now
        </button>
      </a>
    </div>
  );
};

export default CTA;
