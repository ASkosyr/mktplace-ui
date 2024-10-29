import { notFound } from "next/navigation";
import { PaymentDetailsPageView } from "pages-sections/customer-dashboard/payment-methods/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/payments"; 
// TYPES

export const metadata = {
  title: "Payment Details - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function PaymentMethodDetails({
  params
}) {
  const payment = await api.getPayment(params.id);
  if (!payment) notFound();
  return <PaymentDetailsPageView payment={payment} />;
}