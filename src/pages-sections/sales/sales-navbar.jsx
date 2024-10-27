"use client";

import { memo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation"; 
// MUI

import Box from "@mui/material/Box";
import Container from "@mui/material/Container"; 
// CUSTOM GLOBAL COMPONENTS

import IconComponent from "components/IconComponent";
import FlexRowCenter from "components/flex-box/flex-row-center"; 
// CATEGORY TYPESCRIPT INTERFACE


// STYLED COMPONENTS
import { Title } from "./styles"; 
// ==========================================================================


// ==========================================================================
export default memo(function SalesNavbar({
  categories,
  path
}) {
  const params = useParams();
  return <Box bgcolor="background.paper">
      <Container>
        <Box height="5rem" display="flex" justifyContent="center">
          {categories.map(item => {
          const selectedItem = item.slug === params.slug ? 1 : 0;
          return <Link href={`${path}/${item.slug}`} key={item.id} scroll={false}>
                <FlexRowCenter height="100%" minWidth={100} flexDirection="column" bgcolor={selectedItem ? "primary.light" : "transparent"}>
                  <IconComponent icon={item.icon} sx={{
                fontSize: "1.75rem"
              }} color={selectedItem ? "primary" : "secondary"} />

                  <Title selected={selectedItem}>{item.name}</Title>
                </FlexRowCenter>
              </Link>;
        })}
        </Box>
      </Container>
    </Box>;
});