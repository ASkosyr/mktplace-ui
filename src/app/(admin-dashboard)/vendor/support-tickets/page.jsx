import { notFound } from "next/navigation";
import { SupportTicketsPageView } from "pages-sections/vendor-dashboard/support-tickets/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/ticket";
export const metadata = {
  title: "Support Tickets - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "",
    url: ""
  }],
  keywords: ["ai agent", "marketplace", "ai agents marketplace"]
};
export default async function SupportTickets() {
  const {
    tickets
  } = await api.getTicketList();
  if (!tickets || tickets.length === 0) notFound();
  return <SupportTicketsPageView tickets={tickets} />;
}