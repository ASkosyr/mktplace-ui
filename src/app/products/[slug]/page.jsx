import { notFound } from "next/navigation"; 
// PAGE VIEW COMPONENT

import { ProductDetailsPageView } from "pages-sections/product-details/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/products";
import { getFrequentlyBought, getRelatedProducts } from "utils/__api__/related-products"; 
// CUSTOM DATA MODEL

export async function generateMetadata({
  params
}) {
  const product = await api.getProduct(params.slug);
  if (!product) notFound();
  return {
    title: product[0].title + " - AI Agents Marketplace",
    description: product[0].longDescription,
    authors: [{
      name: "",
      url: ""
    }],
    keywords: ["ai agent", "marketplace", "ai agents marketplace"]
  };
}
export default async function ProductDetails({
  params
}) {
  const [product, relatedProducts, frequentlyBought] = await Promise.all([api.getProduct(params.slug), getRelatedProducts(), getFrequentlyBought()]);
  if (!product) notFound();
  return <ProductDetailsPageView product={product[0]} relatedProducts={relatedProducts} frequentlyBought={frequentlyBought} />;
}