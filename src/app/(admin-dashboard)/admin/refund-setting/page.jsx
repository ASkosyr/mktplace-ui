import { RefundSettingPageView } from "pages-sections/vendor-dashboard/refund-setting/page-view";
export const metadata = {
  title: "Refund Setting - AI Agents Marketplace",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "",
    url: ""
  }],
  keywords: ["ai agent", "marketplace", "ai agents marketplace"]
};
export default async function RefundSetting() {
  return <RefundSettingPageView />;
}