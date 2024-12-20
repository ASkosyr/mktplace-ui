import Container from "@mui/material/Container"; 
// LOCAL CUSTOM COMPONENTS

import ProductTabs from "../product-tabs";
import ProductIntro from "../product-intro";
import ProductReviews from "../product-reviews";
import AvailableShops from "../available-shops";
import RelatedProducts from "../related-products";
import FrequentlyBought from "../frequently-bought";
import ProductDescription from "../product-description";
import ProductAPI from "../product-reviews/product-api";
import ServiceAPIForm from "../product-reviews/product-form";
// CUSTOM DATA MODEL


// ==============================================================
export default function ProductDetailsPageView(props) {
  return <Container className="mt-2 mb-2">
      {
      /* PRODUCT DETAILS INFO AREA */
    }
      <ProductIntro product={props.product} />

      {
      /* PRODUCT DESCRIPTION AND REVIEW */

    }

      <ProductTabs product={props.product} />

      {
      /* FREQUENTLY BOUGHT PRODUCTS AREA */
    }
      {/*<FrequentlyBought products={props.frequentlyBought} />*/}

      {
      /* AVAILABLE SHOPS AREA */
    }
      {/*<AvailableShops />*/}

      {
      /* RELATED PRODUCTS AREA */
    }
      <RelatedProducts products={props.relatedProducts} />
    </Container>;
}