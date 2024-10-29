import { notFound } from "next/navigation";
import HealthBeautyPageView from "pages-sections/health-beauty/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/healthbeauty-shop";
export const metadata = {
  title: "Health & Beauty - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "",
    url: ""
  }],
  keywords: ["ai agent", "marketplace", "ai agents marketplace"]
}; 
// ==============================================================


// ==============================================================
export default async function HealthBeautyWithCategory({
  params
}) {
  const category = await api.getCategory(params.category);
  if (!category) notFound();
  return <HealthBeautyPageView selected={category.title} />;
}