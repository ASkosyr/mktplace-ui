import Link from "next/link"; 
// MUI

import Box from "@mui/material/Box";

// GLOBAL CUSTOM COMPONENTS
import { H5 } from "components/Typography"; 
// LOCAL CUSTOM COMPONENTS

import ListItem from "./components/list-item";
import Accordion from "./components/nav-accordion"; 
// STYLED COMPONENTS

import { BorderBox, ColorBorder, NavbarRoot } from "./styles"; 
// CUSTOM DATA MODEL


// ==================================================================
export default function SideNavbar({
  sx,
  navList,
  line = "solid",
  variant = "transparent"
}) {
  return <NavbarRoot sidebar={variant} sx={sx}>
      {navList.map((nav, ind) => <div key={ind + nav.category}>
          {
        /* GROUP TITLE */
      }
          <Box padding="16px 20px 5px 20px">
            <H5>{nav.category}</H5>

            <BorderBox line={line}>
              <ColorBorder />
              <ColorBorder grey={1} />
            </BorderBox>
          </Box>

          {
        /* CATEGORY/NAV LIST */
      }
          {nav.categoryItem.map((item, ind) => {
        if (item.child) return <Accordion item={item} key={ind} />;
        return <Link key={item.title} href={item.href}>
                <div className="linkList">
                  <ListItem item={item} />
                </div>
              </Link>;
      })}
        </div>)}
    </NavbarRoot>;
}