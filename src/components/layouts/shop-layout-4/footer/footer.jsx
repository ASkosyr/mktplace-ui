import Link from "next/link";
import Divider from "@mui/material/Divider"; 
// GLOBAL CUSTOM COMPONENTS

import { Paragraph } from "components/Typography"; 
// STYLED COMPONENT

import { StyledRoot } from "./styles"; 
// ==============================================================


// ==============================================================
export default function Footer({
  links
}) {
  return <StyledRoot>
      <Divider />

      <div className="links">
        {links.map(link => <Link key={link.url} href={link.url}>
            {link.title}
          </Link>)}
      </div>

      <Paragraph>© Copyright {new Date().getFullYear()} By UI LIB.</Paragraph>
    </StyledRoot>;
}