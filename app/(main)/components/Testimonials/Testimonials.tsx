import Heading from "../Heading";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="testimonial">
      <Heading variant="h2">testimonial</Heading>

      <div
        className="testimonial-card
      
      py-[30px] px-[20px] border border-cultured rounded-md
      text-center mb-[25px]

      lg:mb-0
      
      "
      >
        <Image
          height={80}
          width={80}
          src="/assets/testimonials/testimonial-1.jpg"
          alt="alan doe"
          className="testimonial-banner
           w-20 h-20
          m-auto mb-[20px] rounded-full object-cover
          "
        />

        <p
          className="testimonial-name
        
        font-bold uppercase text-gray-400 mb-[5px]
        
        "
        >
          Abdul Kareem
        </p>

        <p
          className="testimonial-title
         text-gray-600 text-sm mb-[15px]
        "
        >
          CEO & Founder Invision
        </p>

        <Image
          src="/assets/icons/quotes.svg"
          alt="quotation"
          className="quotation-img
          m-auto
          mb-[10px]
          "
          width={26}
          height={26}
        />

        <p
          className="testimonial-desc
        
        max-w-[70%] m-auto text-gray-400 text-sm
        "
        >
          Fixam affiliate can change your life from zero to hero. Thank you for
          this wonderful opportunity
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
