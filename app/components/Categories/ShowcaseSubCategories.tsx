import capitalize from "@/app/lib/capitalize";
import CategoryImage from "./CategoryImage";
import { getRandomUniqueElements } from "@/app/lib/randomValues";
import { CategoryType } from "@/app/lib/types";

interface Props {
  slug: string;
}

const ShowcaseSubCategories = async ({ slug }: Props) => {
  let subCategories: CategoryType[] = [];

  try {
    if (slug === "home") {
      const res = await fetch(
        `${process.env.FIXAM_BASE_URL}/products/categories/`,
        {
          next: {
            revalidate: 20,
          },
        }
      );

      const jsonRes: CategoryType[] = await res.json();

      const subCats = jsonRes.filter(
        ({ parent, has_subcategories }) => parent !== null || !has_subcategories
      );

      subCategories = getRandomUniqueElements(subCats, 20);
    } else {
      const res = await fetch(
        `${process.env.FIXAM_BASE_URL}/products/categories/by_slug/${slug}/`,
        {
          next: {
            revalidate: 20,
          },
        }
      );

      const jsonRes: CategoryType = await res.json();

      // Fetch sub categories to display on product categories page
      if (jsonRes.has_subcategories) {
        const res = await fetch(
          `${process.env.FIXAM_BASE_URL}/products/categories/${jsonRes.id}/subcategories/`,
          {
            next: {
              revalidate: 20,
            },
          }
        );

        subCategories = await res.json();
      }
    }
  } catch (error) {
    throw error;
  }

  return (
    <section
      className="hidden gap-4 relative 
      overflow-x-auto has-scrollbar 
      scroll-snap-type-inline-mandatory
      overscroll-behavior-inline-contain
      md:gap-[3.2rem] md:flex"
    >
      {subCategories.map(({ name }) => (
        <div key={name} className="scroll-snap-align-start">
          <CategoryImage
            image={{
              src: "/assets/category_placeholder.png",
              alt: "telivison",
            }}
            label={capitalize(name)}
          />
        </div>
      ))}
    </section>
  );
};

export default ShowcaseSubCategories;
