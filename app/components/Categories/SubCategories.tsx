import CategoryImage from "./CategoryImage";

const SubCategories = () => {
  return (
    <section
      className="flex gap-4 relative 
      overflow-x-auto has-scrollbar 
      scroll-snap-type-inline-mandatory
      overscroll-behavior-inline-contain
      md:gap-[3.2rem]"
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="scroll-snap-align-start">
          <CategoryImage
            image={{
              src: "/assets/television.png",
              alt: "telivison",
            }}
            label="Television"
          />
        </div>
      ))}
    </section>
  );
};

export default SubCategories;
