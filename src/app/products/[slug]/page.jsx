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
    title: product.title + " - AI Agents Marketplace",
    description: "Bazaar is a React Next.js E-commerce template.",
    authors: [{
      name: "UI-LIB",
      url: "https://ui-lib.com"
    }],
    keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
  };
}
export default async function ProductDetails({
  params
}) {
  const [product, relatedProducts, frequentlyBought] = await Promise.all([api.getProduct(params.slug), getRelatedProducts(), getFrequentlyBought()]);
  if (!product) notFound();
  return <ProductDetailsPageView product={product} relatedProducts={relatedProducts} frequentlyBought={frequentlyBought} />;
}