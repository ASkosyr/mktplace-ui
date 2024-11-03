import { cache } from "react";
import axios from "utils/axiosInstance"; 
// CUSTOM DATA MODEL



// get all product slug
const getSlugs = cache(async () => {
  const response = await axios.get("/api/products/slug-list");
  return response.data;
}); 
// get product based on slug

const getProduct = cache(async slug => {
  //const response = await axios.get('http://gateway:3000/agents/' + slug);
  const response = await axios.get('https://agents-service-158714562778.us-central1.run.app/agents/' + slug);


  return response.data;
}); 
// search products

const searchProducts = cache(async (name, category) => {
  const response = await axios.get("/api/products/search", {
    params: {
      name,
      category
    }
  });
  return response.data;
});

// product reviews
const getProductReviews = cache(async () => {
  const response = await axios.get("/api/product/reviews");
  return response.data;
});
export default {
  getSlugs,
  getProduct,
  searchProducts,
  getProductReviews
};