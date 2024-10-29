import { notFound } from "next/navigation";
import GroceryOnePageView from "pages-sections/grocery-1/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/grocery-1";
export const metadata = {
  title: "Grocery 1 - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
}; 
// ==============================================================


// ==============================================================
export default async function GroceryOneWithCategory({
  params
}) {
  const category = await api.getCategory(params.category);
  if (!category) notFound();
  return <GroceryOnePageView selected={category.title} />;
}