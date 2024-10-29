import { VendorPayoutRequestsPageView } from "pages-sections/vendor-dashboard/v-payout-request/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/vendor";
export const metadata = {
  title: "Payout Requests - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "",
    url: ""
  }],
  keywords: ["ai agent", "marketplace", "ai agents marketplace"]
};
export default async function PayoutRequests() {
  const requests = await api.getAllPayoutRequests();
  return <VendorPayoutRequestsPageView payoutRequests={requests} />;
}