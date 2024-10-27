import Grid from "@mui/material/Grid"; 
// GLOBAL CUSTOM COMPONENTS

import { H3 } from "components/Typography";
import ProductCard1 from "components/product-cards/product-card-1"; 
// CUSTOM DATA MODEL


// ==============================================================
export default function RelatedProducts({
  products
}) {
  
// IF NO PRODUCTS RETURN NULL
  if (!products || !products.length) return null;
  return <div className="mb-4">
      <H3 mb={3}>Simiral AI Agents</H3>

      <Grid container spacing={3}>
        {products.map((item, ind) => <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
            <ProductCard1 hoverEffect id={item.id} slug={item.slug} title={item.title} price={item.price} rating={item.rating} imgUrl={item.thumbnail} discount="0" />
          </Grid>)}
      </Grid>
    </div>;
}