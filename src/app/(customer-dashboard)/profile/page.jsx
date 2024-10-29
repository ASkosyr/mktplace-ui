import { notFound } from "next/navigation";
import { ProfilePageView } from "pages-sections/customer-dashboard/profile/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/users";
export async function generateMetadata() {
  const user = await api.getUser();
  if (!user) notFound();
  const name = `${user.name.firstName} ${user.name.lastName}`;
  return {
    title: name + " - AI Agents Marketplace",
    description: "Bazaar is a React Next.js E-commerce template.",
    authors: [{
      name: "",
      url: ""
    }],
    keywords: ["ai agent", "marketplace", "ai agents marketplace"]
  };
}
export default async function Profile() {
  const user = await api.getUser();
  if (!user) notFound();
  return <ProfilePageView user={user} />;
}