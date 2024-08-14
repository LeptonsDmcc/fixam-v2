import { ReactNode } from "react";

export type ImageType = {
  src: string;
  alt: string;
};

export type DirectionType = {
  direction: "horizontal" | "vertical";
};

export type LinkType = { icon?: ReactNode | string; to: string; text: string };

export type OptionType = {
  label: string;
  value: string;
};

export type ErrorMessagesType = {
  [key: string]: string[];
};

export type CategoryType = {
  id: string;
  name: string;
  slug: string;
  has_subcategories: boolean;
  parent: string | null;
};

export type ProductType = {
  id?: string;
  description?: string;
  category?: string;
  waranty?: boolean;
  crumbs?: string[];
  is_dod?: boolean;
  categories?: string;
  name: string;
  brand?: string;
  slug: string;
  images: { [key: string]: string }[];
  selling_price: number;
  average_rating: number;
  review_count: number;
};
