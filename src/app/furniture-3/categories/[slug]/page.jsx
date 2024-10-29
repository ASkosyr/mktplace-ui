
// PAGE VIEW COMPONENT
import { FurnitureThreeCategoriesPageView } from "pages-sections/furniture-3/page-view"; 
// CUSTOM DATA MODEL

export const metadata = {
  title: "Furniture Products - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "",
    url: ""
  }],
  keywords: ["ai agent", "marketplace", "ai agents marketplace"]
};
export default function FurnitureThreeCategories({
  params
}) {
  return <FurnitureThreeCategoriesPageView slug={params.slug} />;
}