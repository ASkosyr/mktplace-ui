import { SalesTwoPageView } from "pages-sections/sales/page-view"; 
// SALES API FUNCTIONS

import api from "utils/__api__/sales";
export const metadata = {
  title: "Sales 2 - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
}; 
// ==============================================================


// ==============================================================
export default async function SalesTwo({
  searchParams
}) {
  const page = +searchParams.page || 1;
  const data = await api.getProducts(page);

  if (!data) {
    return <div>Failed to load</div>;
  }

  if (!data.products) {
    return <div>No products found</div>;
  }

  return <SalesTwoPageView page={page} products={data.products} pageSize={data.pageSize} totalProducts={data.totalProducts} />;
}