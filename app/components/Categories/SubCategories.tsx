import { TfiArrowCircleLeft } from "react-icons/tfi";
import CategoryImage from "./CategoryImage";
import PrevNextArrows from "../PrevNextArrows";

const SubCategories = () => {
  return (
    <section
      className="flex gap-[3.2rem] relative overflow-x-hidden'
    overflow-x-auto has-scrollbar scroll-x-behavior
    "
    >
      {/* <PrevNextArrows /> */}
      <CategoryImage
        image={{
          src: "/assets/television.png",
          alt: "telivison",
        }}
        label="Television"
      />
      <CategoryImage
        image={{
          src: "/assets/television.png",
          alt: "telivison",
        }}
        label="Television"
      />
      <CategoryImage
        image={{
          src: "/assets/television.png",
          alt: "telivison",
        }}
        label="Television"
      />
      <CategoryImage
        image={{
          src: "/assets/television.png",
          alt: "telivison",
        }}
        label="Television"
      />
      <CategoryImage
        image={{
          src: "/assets/television.png",
          alt: "telivison",
        }}
        label="Television"
      />
      <CategoryImage
        image={{
          src: "/assets/television.png",
          alt: "telivison",
        }}
        label="Television"
      />
      <CategoryImage
        image={{
          src: "/assets/television.png",
          alt: "telivison",
        }}
        label="Television"
      />
    </section>
  );
};

export default SubCategories;
