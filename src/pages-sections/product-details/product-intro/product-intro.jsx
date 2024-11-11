import Link from "next/link";
import Chip from "@mui/material/Chip";
// MUI

import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating"; 
// GLOBAL CUSTOM COMPONENTS

import { H1, H2, H6 } from "components/Typography"; 
// LOCAL CUSTOM COMPONENTS

import AddToCart from "./add-to-cart";
import ProductGallery from "./product-gallery";
import ProductVariantSelector from "./product-variant-selector"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// STYLED COMPONENTS

import {ProductImageWrapper, StyledRoot} from "./styles";
import Image from "next/image";
import React from "react";
import {ImageWrapper} from "../../fashion-3/section-13/styles";
// CUSTOM DATA MODEL


// ================================================================
export default function ProductIntro({
  product
}) {
  console.log("tags:" + product.tags);

  return <StyledRoot>

        <Grid item md={6} xs={12} alignItems="left">
            <ProductImageWrapper>
                <img alt="product" src={product.thumbnail} width={100} height={100} class="object-left" />
            </ProductImageWrapper>
          {
          /* PRODUCT NAME */
        }
          <H1 mb={1}>{product.title}</H1>

          {
          /* PRODUCT BRAND */
        }
          {product.brand && <p className="brand">
              Brand: <strong>{product.brand}</strong>
            </p>}

          {
          /* PRODUCT RATING */
        }
          {/*<div className="rating">
            <span>Rated:</span>
            <Rating readOnly color="warn" size="small" value={product.rating} />
            <H6 lineHeight="1">({product.reviews.length})</H6>
          </div>*/}

          {
          /* PRODUCT VARIANTS */
        }
          {/*<ProductVariantSelector />*/}

          {/*{product.tags.split(',').map(tag => <Chip label={tag} variant="outlined"/>)}*/}

          {
          /* PRICE & STOCK */
        }
          <div className="price">
            <H2 color="primary.main" mb={0.5} lineHeight="1">
              {currency(product.price)}
            </H2> per 1000 calls

            {/*<p>Stock Available</p>*/}
          </div>

          {
          /* ADD TO CART BUTTON */
        }
          <AddToCart product={product} />

      </Grid>
    </StyledRoot>;
}