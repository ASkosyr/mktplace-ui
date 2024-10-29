
// PAGE VIEW COMPONENT
import { GroceryFourCategoriesPageView } from "pages-sections/grocery-4/page-view"; 
// CUSTOM DATA MODEL

export const metadata = {
  title: "Grocery 4 - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "",
    url: ""
  }],
  keywords: ["ai agent", "marketplace", "ai agents marketplace"]
};
export default function GroceryCategories({
  params
}) {
  return <GroceryFourCategoriesPageView slug={params.slug} />;
}