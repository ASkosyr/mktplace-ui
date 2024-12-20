import { WishListPageView } from "pages-sections/customer-dashboard/wish-list"; 
// API FUNCTIONS

import { getWishListProducts } from "utils/__api__/wish-list";
export const metadata = {
  title: "Wish List - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "",
    url: ""
  }],
  keywords: ["ai agent", "marketplace", "ai agents marketplace"]
}; 
// ==============================================================


// ==============================================================
export default async function WishList({
  searchParams
}) {
  const data = await getWishListProducts(+searchParams.page || 1);

  if (!data || data.products.length === 0) {
    return <div>Data not found</div>;
  }

  return <WishListPageView products={data.products} totalPages={data.totalPages} />;
}