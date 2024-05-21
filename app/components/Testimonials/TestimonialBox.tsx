import CTA from "../CTAs/CTA";
import Services from "../OurServices/Services";
import Testimonials from "./Testimonials";

const TestimonialBox = () => {
  return (
    <div>
      <div className="wrapper">
        <div
          className="testimonials-box
        
        mb-[50px]

        lg:flex lg:items-stretch lg:gap-[30px]
        lg:flex-wrap'
        "
        >
          <Testimonials />
          <CTA />
          <Services />
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
