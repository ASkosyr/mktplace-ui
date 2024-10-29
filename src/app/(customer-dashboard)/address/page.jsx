import { AddressPageView } from "pages-sections/customer-dashboard/address/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/address";
export const metadata = {
  title: "Address - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "",
    url: ""
  }],
  keywords: ["ai agent", "marketplace", "ai agents marketplace"]
}; 
// ==============================================================


// ==============================================================
export default async function Address({
  searchParams
}) {
  const data = await api.getAddressList(+searchParams.page || 1);

  if (!data || data.addressList.length === 0) {
    return <div>Data not found</div>;
  }

  return <AddressPageView addressList={data.addressList} totalPages={data.totalPages} />;
}