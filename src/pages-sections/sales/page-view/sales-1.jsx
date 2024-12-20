"use client";

import { useRef } from "react";
import Container from "@mui/material/Container"; 
// LOCAL CUSTOM COMPONENTS

import SaleNavbar from "../sales-navbar";
import ProductList from "../product-list";
import CategoryList from "../category-list";
import ProductPagination from "../product-pagination"; 
// GLOBAL CUSTOM HOOK

import useScroller from "hooks/useScroller"; 
// GLOBAL CUSTOM COMPONENTS

import { H1 } from "components/Typography";
import FlexBox from "components/flex-box/flex-box"; 
// STYLED COMPONENT

import { CategoryWrapper } from "../styles"; 
// CUSTOM DATA MODEL


// ==============================================================
export default function SalesOnePageView({
  offer,
  discount,
  page,
  products,
  pageSize,
  categories,
  totalProducts
}) {
  const categoryRef = useRef(null);
  const {
    isFixedHeader
  } = useScroller(categoryRef);
  return <Container className="mt-2">
      {
      /* CATEGORY HEADER NAV */
    }
      <CategoryWrapper show={isFixedHeader}>
        <SaleNavbar path="/sales-1" categories={categories} />
      </CategoryWrapper>

      {
      /* TITLE */
    }
      <FlexBox mb={4} flexWrap="wrap" gap={1}>
        <H1 color="primary.main" lineHeight="1">
          {offer}
        </H1>

        <H1 color="grey.600" lineHeight="1">
          {discount}
        </H1>
      </FlexBox>

      {
      /* CATEGORY LIST AREA */
    }
      <CategoryList ref={categoryRef} categories={categories} />

      {
      /* PRODUCT LIST AREA */
    }
      <ProductList products={products} />

      {
      /* PAGINATION AREA */
    }
      <ProductPagination page={page} perPage={pageSize} totalProducts={totalProducts} />
    </Container>;
}