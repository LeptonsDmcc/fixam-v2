import CategoryImage from "./CategoryImage";

const SubCategories = () => {
  return (
    <section
      className="flex gap-[3.2rem] relative 
      overflow-x-auto has-scrollbar scroll-x-behavior"
    >
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
