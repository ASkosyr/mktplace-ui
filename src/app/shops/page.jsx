import { notFound } from "next/navigation"; 
// API FUNCTIONS

import api from "utils/__api__/shop"; 
// PAGE VIEW COMPONENT

import { ShopsPageView } from "pages-sections/shops/page-view";
export const metadata = {
  title: "Shops - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "",
    url: ""
  }],
  keywords: ["ai agent", "marketplace", "ai agents marketplace"]
};
export default async function Shops() {
  const {
    shops,
    meta
  } = await api.getShopList();
  if (!shops) return notFound();
  return <ShopsPageView shops={shops} lastIndex={meta.lastIndex} totalPages={meta.totalPages} firstIndex={meta.firstIndex} totalShops={meta.totalShops} />;
}