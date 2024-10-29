import { CreateBrandPageView } from "pages-sections/vendor-dashboard/brands/page-view";
export const metadata = {
  title: "Brand Create - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "",
    url: ""
  }],
  keywords: ["ai agent", "marketplace", "ai agents marketplace"]
};
export default function BrandCreate() {
  return <CreateBrandPageView />;
}