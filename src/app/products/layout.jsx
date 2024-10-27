import ShopLayout1 from "components/layouts/shop-layout-1"; 
// API FUNCTIONS

import api from "utils/__api__/layout";
export default async function Layout1({
  children
}) {
  const data = await api.getLayoutData();
  return <div>{children}</div>;
}