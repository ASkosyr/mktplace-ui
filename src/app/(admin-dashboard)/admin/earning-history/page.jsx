import { EarningHistoryPageView } from "pages-sections/vendor-dashboard/earning-history/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/dashboard";
export const metadata = {
  title: "Earning History - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "",
    url: ""
  }],
  keywords: ["ai agent", "marketplace", "ai agents marketplace"]
};
export default async function EarningHistory() {
  const earnings = await api.earningHistory();
  return <EarningHistoryPageView earnings={earnings} />;
}