
// PAGE VIEW COMPONENT
import { ProductSearchPageView } from "pages-sections/product-details/page-view"; 
// API FUNCTIONS

import { getFilters, getProducts } from "utils/__api__/product-search";
export const metadata = {
  title: "Agents Search - AI Agents Marketplace",
  description: `AI Agents Marketplace`,
  authors: [{
    name: "",
    url: ""
  }],
  keywords: ["ai agent", "marketplace", "ai agents marketplace"]
}; 
// ==============================================================


// ==============================================================
export default async function ProductSearch({
  searchParams
}) {
  const {
    term, category, rating, tags, page
  } = searchParams;
  const [data] = await Promise.all([getProducts({
    term, category, rating, tags, page
  })]);
  return <ProductSearchPageView results={data} />;
}