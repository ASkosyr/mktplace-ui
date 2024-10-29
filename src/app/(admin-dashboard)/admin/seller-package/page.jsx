import { SellerPackagePageView } from "pages-sections/vendor-dashboard/seller-package/page-view";
export const metadata = {
  title: "Seller Package - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "",
    url: ""
  }],
  keywords: ["ai agent", "marketplace", "ai agents marketplace"]
};
export default async function SellerPackage() {
  return <SellerPackagePageView />;
}