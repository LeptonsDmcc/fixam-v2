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

export type AddressType = {
  url: string;
  id: string;
  street_address: string;
  city: string;
  state: string;
  country: string;
  zip_code: number;
  email: string;
  is_default: boolean;
  first_name: string;
  last_name: string;
  phone_one: string;
  phone_two: string;
  created_at: string;
  updated_at: string;
  user: string;
};

export type UserType = {
  id: string;
  profile: string;
  addresses: AddressType[];
  first_name: string;
  last_name: string;
  is_active: boolean;
  is_vendor: boolean;
  phone: string;
  email: string;
} | null;

export type CartItemOptionType = {
  id?: number;
  attribute: string;
  value: string;
};

export type CartItemType = {
  id?: string;
  item_options?: CartItemOptionType[];
  is_active?: boolean;
  price?: number;
  created_at?: Date;
  modified_at?: Date;
  quantity: number;
  prod_id: string;
};

export type CartType = {
  id?: string;
  user_id: string;
  cart_items: CartItemType[];
  total_quantity?: string;
  created_at?: Date;
  modified_at?: Date;
  shipping_cost: number;
};
