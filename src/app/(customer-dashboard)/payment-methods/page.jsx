import { PaymentMethodsPageView } from "pages-sections/customer-dashboard/payment-methods/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/payments";
export const metadata = {
  title: "Payment Methods - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "",
    url: ""
  }],
  keywords: ["ai agent", "marketplace", "ai agents marketplace"]
}; 
// ==============================================================


// ==============================================================
export default async function PaymentMethods({
  searchParams
}) {
  const data = await api.getPayments(+searchParams.page || 1);

  if (!data || data.payments.length === 0) {
    return <div>Data not found</div>;
  }

  return <PaymentMethodsPageView payments={data.payments} totalPages={data.totalPages} />;
}