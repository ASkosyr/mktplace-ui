
// PAGE VIEW COMPONENT
import { GadgetThreeCategoriesPageView } from "pages-sections/gadget-3/page-view"; 
// CUSTOM DATA MODEL

export const metadata = {
  title: "Gadget Products - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "",
    url: ""
  }],
  keywords: ["ai agent", "marketplace", "ai agents marketplace"]
};
export default function GadgetThreeCategories({
  params
}) {
  return <GadgetThreeCategoriesPageView slug={params.slug} />;
}