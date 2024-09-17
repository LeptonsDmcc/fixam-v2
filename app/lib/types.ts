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
  is_favorited?: boolean;
  brand?: string;
  store?: string;
  slug: string;
  images: { [key: string]: string }[];
  name: string;
  selling_price: number;
  average_rating: number;
  review_count: number;
};

export type AddressType = {
  url?: string;
  id?: string;
  street_address: string;
  city: string;
  state: string;
  country: string;
  zip_code: number;
  email: string;
  is_default?: boolean;
  first_name: string;
  last_name: string;
  phone_one: string;
  phone_two?: string;
  created_at?: string;
  updated_at?: string;
  user?: string;
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

// PAYMENT
export type PaymentMethodType = "CardPayment" | "PayOnDelivery";
export type PaymentStatusType = "Pending" | "Complete" | "Failed";

export type PaymentType = {
  id?: string;
  tx_ref?: string;
  amount?: number;
  // customer_email: string;
  order: string;
  // user_id: string;
  payment_method: PaymentMethodType;
  // payment_status: PaymentStatusType;
  currency?: string;
};

export type AuthorizationURLType = {
  status: boolean;
  message: string;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
};

// ORDER

export type OrderItemType = {
  id?: string;
  product?: string;
  item_price?: number;
  quantity?: number;
  created_at?: string;
  modified_at?: string;
  variation_ids?: string;
  is_item_cancelled?: boolean;
  order?: string;
};

export type OrderStatusType = "Placed" | "Confirmed" | "Shipped" | "Delivered";

export type OrderType = {
  id?: string;
  order_items: OrderItemType[];
  order_payment_method: PaymentMethodType;
  delivery_address?: AddressType;
  delivery_address_id?: string;
  guest_delivery_address?: AddressType;
  created_at?: string;
  modified_at?: string;
  order_delivery_status?: OrderStatusType;
  order_payment_status?: "Pending";
  shipping_cost?: 0;
  order_total_price?: 0;
  is_order_cancelled?: false;
  user?: string;
};

// WISHLIST
export type WishtListType = {
  id: string;
  product: string;
  created_at: string;
  updated_at: string;
  user: string;
};

// STORE
export type StoreType = {
  id?: string;
  name: string;
};
