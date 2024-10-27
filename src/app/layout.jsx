import { Open_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
export const openSans = Open_Sans({
  subsets: ["latin"]
});
import "overlayscrollbars/overlayscrollbars.css"; 
// THEME PROVIDER

import ThemeProvider from "theme/theme-provider"; 
// PRODUCT CART PROVIDER

import CartProvider from "contexts/CartContext"; 
// SITE SETTINGS PROVIDER

import SettingsProvider from "contexts/SettingContext"; 
// GLOBAL CUSTOM COMPONENTS

import RTL from "components/rtl";
import ProgressBar from "components/progress"; 
// IMPORT i18n SUPPORT FILE

import api from "utils/__api__/layout";
import "i18n";
import {Header} from "../components/header";
import ShopLayout1 from "../components/layouts/shop-layout-1";
export default async function RootLayout({
  children,
  modal
}) {
  const data = await api.getLayoutData();
  return <html lang="en" suppressHydrationWarning>
      <body className={openSans.className}>
        <CartProvider>
          <SettingsProvider>
            <ThemeProvider>
              <ProgressBar />
              <Header/>
              <RTL>
                {modal}
                <ShopLayout1 data={data}>{children}</ShopLayout1>;
              </RTL>
            </ThemeProvider>
          </SettingsProvider>
        </CartProvider>

        <GoogleAnalytics gaId="G-XKPD36JXY0" />
      </body>
    </html>;
}