import searchClient from "@/app/lib/searchClient";
import DOMPurify from "dompurify";
import Image from "next/image";
import { useEffect, useState } from "react";
import { QueryType } from "./SearchedProducts";
import { ROUTES } from "@/app/lib/contants";
import Link from "next/link";

type DocuementType = {
  id: string;
  image: string;
  icon: string;
  name: string;
  slug: string;
};

interface Props {
  searchTerm: string;
}

const SearchedCategories = ({ searchTerm }: Props) => {
  const [searchResults, setSearchResults] =
    useState<QueryType<DocuementType>>();

  let searchParameters = {
    q: searchTerm,
    query_by: "name",
  };

  useEffect(() => {
    const search = async () => {
      try {
        const results = (await searchClient
          .collections("dev_categories")
          .documents()
          .search(searchParameters)) as QueryType<DocuementType>;

        setSearchResults(results);
      } catch (error) {
        console.log("ERROR LOADING SEARCH", error);
      }
    };

    search();
  }, [searchTerm]);

  if (searchResults?.hits)
    return (
      <ul>
        {/* <h3 className="bg-gray-100 p-2">Categories</h3> */}

        {searchResults.hits.map((hit, i) => {
          if (i > 0) return;

          // Sanitize the HTML string
          const sanitizedString = DOMPurify.sanitize(
            hit.highlight.name && hit.highlight.name.snippet
          );

          const categoryName = hit.document.name;
          const categorySlug = hit.document.slug;
          const categoryIcon = hit.document.icon;

          // const linkValue = hit.document.categories.join("/").replace(/\s/img, "-");

          {
            /* TODO: Show suggestion */
          }
          return (
            <li>
              <Link
                className="flex items-center gap-2 hover:bg-gray-100"
                href={`${ROUTES.product}/?category=${categorySlug}`}
              >
                {categoryIcon && (
                  <div className="p-2">
                    <Image src={categoryIcon} width={30} height={30} alt="" />
                  </div>
                )}

                <div
                  dangerouslySetInnerHTML={{
                    __html: sanitizedString || categoryName,
                  }}
                  className=" last-of-type:border-b-0 border-b p-2
                text-gray-500"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    );
};

export default SearchedCategories;
