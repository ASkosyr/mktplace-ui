import { notFound } from "next/navigation";
import { OrderDetailsPageView } from "pages-sections/customer-dashboard/orders/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/orders"; 
// CUSTOM DATA MODEL

export async function generateMetadata({
  params
}) {
  const order = await api.getOrder(params.id);
  if (!order) notFound();
  return {
    title: order.id + " - AI Agents Marketplace",
    description: "Bazaar is a React Next.js E-commerce template.",
    authors: [{
      name: "",
      url: ""
    }],
    keywords: ["ai agent", "marketplace", "ai agents marketplace"]
  };
}
export default async function OrderDetails({
  params
}) {
  const order = await api.getOrder(params.id);
  if (!order) notFound();
  return <OrderDetailsPageView order={order} />;
}