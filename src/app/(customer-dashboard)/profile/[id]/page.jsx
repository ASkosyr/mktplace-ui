import { notFound } from "next/navigation";
import { ProfileEditPageView } from "pages-sections/customer-dashboard/profile/page-view"; 
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
      name: "UI-LIB",
      url: "https://ui-lib.com"
    }],
    keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
  };
}
export default async function ProfileEdit() {
  const user = await api.getUser();
  if (!user) notFound();
  return <ProfileEditPageView user={user} />;
}