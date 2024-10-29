import { notFound } from "next/navigation";
import { AddressDetailsPageView } from "pages-sections/customer-dashboard/address/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/address"; 
// CUSTOM DATA MODEL

export async function generateMetadata({
  params
}) {
  const address = await api.getAddress(params.id);
  if (!address) notFound();
  return {
    title: address.title + " - AI Agents Marketplace",
    description: "Bazaar is a React Next.js E-commerce template.",
    authors: [{
      name: "",
      url: ""
    }],
    keywords: ["ai agent", "marketplace", "ai agents marketplace"]
  };
}
export default async function Address({
  params
}) {
  const address = await api.getAddress(params.id);
  if (!address) notFound();
  return <AddressDetailsPageView address={address} />;
}