// features/payment/hooks/usePayment.ts
import { useMutation } from "@tanstack/react-query";
import { createOrder, createSnapPayment } from "../services/payment.service";

export const usePayment = () => {
  return useMutation({
    mutationFn: async (duration_days: number) => {
      const order = await createOrder(duration_days);
      if (!order) throw new Error("Order creation failed");

      const payment = await createSnapPayment(order.id);
      if (!payment) throw new Error("Payment creation failed");

      return payment;
    },
    onSuccess: ({ redirect_url }) => {
      window.location.href = redirect_url;
    },
  });
};