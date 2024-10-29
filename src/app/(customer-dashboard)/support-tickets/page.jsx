import { TicketsPageView } from "pages-sections/customer-dashboard/support-tickets/page-view"; 
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
// ==============================================================


// ==============================================================
export default async function SupportTickets({
  searchParams
}) {
  const data = await api.getTicketList(+searchParams.page || 1);

  if (!data || data.tickets.length === 0) {
    return <div>Data not found</div>;
  }

  return <TicketsPageView tickets={data.tickets} totalPages={data.totalPages} />;
}