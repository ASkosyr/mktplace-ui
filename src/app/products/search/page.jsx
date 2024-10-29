
// PAGE VIEW COMPONENT
import { ProductSearchPageView } from "pages-sections/product-details/page-view"; 
// API FUNCTIONS

import { getFilters, getProducts } from "utils/__api__/product-search";
export const metadata = {
  title: "Product Search - AI Agents Marketplace",
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
    q,
    page,
    sort,
    sale,
    prices,
    colors,
    brands,
    rating,
    category
  } = searchParams;
  const [filters, data] = await Promise.all([getFilters(), getProducts({
    q,
    page,
    sort,
    sale,
    prices,
    colors,
    brands,
    rating,
    category
  })]);
  return <ProductSearchPageView filters={filters} products={data.products} pageCount={data.pageCount} totalProducts={data.totalProducts} lastIndex={data.lastIndex} firstIndex={data.firstIndex} />;
}