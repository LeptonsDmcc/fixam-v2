import PrevNextArrows from "../PrevNextArrows";
import CategoryImage from "./CategoryImage";

const SubCategories = () => {
  return (
    <section
      className="flex gap-[3.2rem] relative 
      overflow-x-auto has-scrollbar scroll-x-behavior
      overflow-x-hidden'"
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
