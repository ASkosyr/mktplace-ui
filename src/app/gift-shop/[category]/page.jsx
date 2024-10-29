import { notFound } from "next/navigation";
import GiftShopPageView from "pages-sections/gift-shop/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/gift-shop";
export const metadata = {
  title: "Gift Shop - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "",
    url: ""
  }],
  keywords: ["ai agent", "marketplace", "ai agents marketplace"]
}; 
// ==============================================================


// ==============================================================
export default async function GiftShopWithCategory({
  params
}) {
  const category = await api.getCategory(params.category);
  if (!category) notFound();
  return <GiftShopPageView selected={category.title} />;
}