import { notFound } from "next/navigation"; 
// PAGE VIEW COMPONENT

import { ShopDetailsPageView } from "pages-sections/shops/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/shop";
import { getFilters } from "utils/__api__/product-search";
export const metadata = {
  title: "Shop Details - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "",
    url: ""
  }],
  keywords: ["ai agent", "marketplace", "ai agents marketplace"]
};
export default async function ShopDetails({
  params
}) {
  const shop = await api.getProductsBySlug(params.slug);
  const filters = await getFilters();
  if (!shop) notFound();
  return <ShopDetailsPageView shop={shop} filters={filters} />;
}