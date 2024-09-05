import searchClient from "@/app/lib/searchClient";
import DOMPurify from "dompurify";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type ProductDocumentType = {
  brand: string;
  categories: string[];
  condition: string;
  featured: boolean;
  id: string;
  image: string;
  name: string;
  old_price: number;
  selling_price: number;
  price: number;
  rating: number;
  review_count: number;
  sponsored: boolean;
  store: string;
  views: number;
  slug: string;
  "categories.name": string[];
};

type HitType<T> = {
  document: T;
  highlight: {
    name: {
      matched_tokens: string[];
      snippet: string;
    };
  };
};

export type QueryType<HD> = {
  hits: HitType<HD>[];
  found: number;
} | null;

interface Props {
  searchTerm: string;
}

const SearchedProducts = ({ searchTerm }: Props) => {
  const [searchResults, setSearchResults] =
    useState<QueryType<ProductDocumentType>>();

  let searchParameters = {
    q: searchTerm,
    query_by: "name",
  };

  useEffect(() => {
    const search = async () => {
      try {
        const results = (await searchClient
          .collections("dev_products")
          .documents()
          .search(searchParameters)) as QueryType<ProductDocumentType>;

        setSearchResults(results);
      } catch (error) {
        console.log("ERROR LOADING SEARCH", error);
      }
    };

    search();
  }, [searchTerm]);

  if (searchResults?.found && searchResults?.hits)
    return (
      <ul className="">
        <h3 className="bg-gray-100 p-2">Products</h3>

        {searchResults.hits.map((hit) => {
          // Sanitize the HTML string

          const sanitizedString = DOMPurify.sanitize(
            hit.highlight.name && hit.highlight.name.snippet
          );

          const productName = hit.document.name;

          //   const linkValue = hit.document.categories.join("/").replace(/\s/img, "-");

          return (
            <li
              key={hit.document.id}
              className="flex items-center gap-2 hover:bg-gray-100"
            >
              {/* TODO: Show suggestion */}
              {hit.document.image && (
                <div className="p-2">
                  <Image
                    src={hit.document.image}
                    width={20}
                    height={20}
                    alt=""
                  />
                </div>
              )}
              <Link
                dangerouslySetInnerHTML={{
                  __html: sanitizedString || productName,
                }}
                className=" last-of-type:border-b-0 border-b p-2 text-sm 
                text-gray-500 
               "
                href={`products/?p=${hit.document.slug}`}
              />
            </li>
          );
        })}
      </ul>
    );
};

export default SearchedProducts;
