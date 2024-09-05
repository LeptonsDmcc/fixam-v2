import {
  ProductDocumentType,
  QueryType,
} from "@/app/(main)/components/Inputs/SearchedProducts";

import searchClient from "../searchClient";
import { ProductType } from "../types";

export async function fetchProductsBaseOnQuery(query: any) {
  const categorySlug = query.category ? query.category : "";
  const categoryFilterString = categorySlug
    ? `categories.slug: ${categorySlug} &&`
    : "";
  const ratingFilterString = query.rating ? `rating: ${query.rating} &&` : "";
  const sortString = query.sort_by
    ? `${decodeURIComponent(query.sort_by)}`
    : "";

  let searchParameters: { [key: string]: string | number } = {
    q: query.search || "*",
    query_by: "name",
    per_page: 12,
    page: query.page || 1,
    filter_by: `${categoryFilterString} ${ratingFilterString} price: ${
      query.price ? [query.price] : "[>10]"
    }`,
  };

  // Dynamically add sort_by field
  // If it's not present then no sort order is used
  if (query.sort_by && query.sort_by != "relevance")
    searchParameters.sort_by = sortString;

  let products: ProductType[] = [];
  let found = 0;

  try {
    const results = (await searchClient
      .collections("dev_products")
      .documents()
      .search(searchParameters)) as QueryType<ProductDocumentType>;

    // Convert hit.document to our product document format
    if (results) {
      found = results.found;
      products = results.hits.map((hit) => {
        return {
          images: [{ image: hit.document.image }],
          name: hit.document.name,
          slug: hit.document.slug,
          selling_price: hit.document.price,
          average_rating: hit.document.rating,
          review_count: hit.document.review_count,
          crumbs: hit.document["categories.name"],
        };
      });
    }
  } catch (error) {
    console.log("ERROR LOADING SEARCH", error);
  }

  return { products, found };
}
