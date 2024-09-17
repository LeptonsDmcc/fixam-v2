"use server";

import { ROUTES } from "@/app/lib/contants";
import { patchData } from "@/app/lib/services/apiClient";
import { revalidatePath } from "next/cache";

export const cancelOrderAction = async (orderId: string) => {
  console.log("cancelOrderAction", orderId);
  try {
    await patchData(`orders/${orderId}/cancel`);
    revalidatePath(ROUTES.orders);
    return {
      message: "Order Canceled",
      hasError: false,
    };
  } catch (error) {
    console.log("ERROR DELETING ADDRESS", error);
    revalidatePath(ROUTES.orders);
    return {
      message: "Order Canceled",
      hasError: true,
    };
  }
};
