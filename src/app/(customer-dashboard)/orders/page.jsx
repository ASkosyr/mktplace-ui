import { OrdersPageView } from "pages-sections/customer-dashboard/orders/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/orders";
export const metadata = {
  title: "Orders - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
}; 
// ==============================================================


// ==============================================================
export default async function Orders({
  searchParams
}) {
  const data = await api.getOrders(+searchParams.page || 1);

  if (!data || data.orders.length === 0) {
    return <div>Failed to load</div>;
  }

  return <OrdersPageView orders={data.orders} totalPages={data.totalPages} />;
}