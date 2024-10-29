import { notFound } from "next/navigation";
import FurnitureOnePageView from "pages-sections/furniture-1/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/furniture-1";
export const metadata = {
  title: "Furniture Shop - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "",
    url: ""
  }],
  keywords: ["ai agent", "marketplace", "ai agents marketplace"]
}; 
// ==============================================================


// ==============================================================
export default async function FurnitureShopWithCategory({
  params
}) {
  const category = await api.getCategory(params.category);
  if (!category) notFound();
  return <FurnitureOnePageView selected={category.title} />;
}