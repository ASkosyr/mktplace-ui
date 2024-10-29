import { DashboardPageView } from "pages-sections/vendor-dashboard/dashboard/page-view";
export const metadata = {
  title: "Vendor Dashboard - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "",
    url: ""
  }],
  keywords: ["ai agent", "marketplace", "ai agents marketplace"]
};
export default async function VendorDashboard() {
  return <DashboardPageView />;
}