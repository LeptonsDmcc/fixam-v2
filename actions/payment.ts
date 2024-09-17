"use server";

import { fixamBaseUrl } from "@/app/lib/contants";
import getAuthUser from "@/app/lib/data/user";
import { postData } from "@/app/lib/services/apiClient";
import {
  CartItemType,
  OrderItemType,
  OrderType,
  PaymentMethodType,
  PaymentType,
} from "@/app/lib/types";

type OrderInfoType = {
  grandTotal: number;
  email?: string;
  addressId?: string;
  cartItems?: CartItemType[];
  orderItem?: OrderItemType;
  paymentMethod?: string;
  productId?: string;
};

const initiateCardPayment = async (payment: PaymentType) => {
  console.log("GOT THiS PAYMENT", payment);
  const createdPaymentRes = await fetch(
    `${fixamBaseUrl}/payments/paystack/make/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: payment.order,
        payment_method: payment.payment_method,
        currency: payment.currency,
      }),
    }
  );

  const createdPayment = await createdPaymentRes.json();

  console.log("createdPayment", createdPayment);
  console.log("createdPayment data", createdPayment?.data);

  if (
    createdPayment.transaction &&
    createdPayment.transaction.authorization_url
  ) {
    return createdPayment.transaction.authorization_url;
  }

  if (!createdPayment?.data) return;
  return createdPayment.data.authorization_url;
};

export const placeOrderAction = async (
  orderInfo: OrderInfoType,
  formData: FormData
) => {
  const order = {
    ...orderInfo,
    paymentMethod: formData.get("paymentMethod"),
  };

  // const get auth user
  const user = await getAuthUser();

  const orderItems = order.cartItems?.map((item) => ({
    quantity: item.quantity,
    product: item.prod_id,
  }));

  // Create new order object
  const orderObj: OrderType = {
    order_items: orderItems!,
    order_payment_method: order.paymentMethod!.toString() as PaymentMethodType,
  };

  if (user) {
    // Attach user's id
    orderObj.delivery_address_id = order.addressId;
    orderObj.user = user.id;
  } else {
    // Create guest user address to send to
    orderObj.guest_delivery_address = {
      street_address: "string",
      city: "string",
      state: "string",
      country: "str",
      zip_code: 2147483647,
      first_name: "string",
      last_name: "string",
      phone_one: "string",
      phone_two: "string",
      email: "user@example.com",
    };
  }

  const createdOrder = await postData<OrderType, OrderType>(`orders`, orderObj);
  console.log("BEFORE CHECKED createdOrder", createdOrder);
  if (!createdOrder) {
    return;
  }
  console.log("YESSS!!!==== createdOrder", createdOrder);
  const newPayment: PaymentType = {
    // amount: order.grandTotal * 100,
    order: createdOrder.id!,
    payment_method: order.paymentMethod! as PaymentMethodType,
    currency: "NGN",
  };

  // const newPayment: PaymentType = {
  //   // amount: order.grandTotal * 100,
  //   // customer_email: order.email!,
  //   order: "FmYZQj2FLRJyyoBmiTcoVk",
  //   payment_method: order.paymentMethod! as PaymentMethodType,
  //   // payment_status: "Pending",
  //   currency: "NGN",
  // };

  return initiateCardPayment(newPayment);
};

// export const placeBuyNowOrderAction = async (
//   orderInfo: OrderInfoType,
//   formData: FormData
// ) => {
//   // In this case, the user routes through the 'buy now'
//   const res = await fetch(`/orders/${orderInfo.productId}/shippingfee/`);
//   const shippingCostData = await res.json();
//   console.log("shippingCostData", shippingCostData);

//   if (shippingCostData) {
//     placeOrderAction(orderInfo, formData);
//   }
// };
