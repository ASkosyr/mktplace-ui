import { cache } from "react";
import productDatabase from "data/product-database";
import axios from "../axiosInstance";
// FILTER OPTIONS

const CATEGORIES = [{
  title: "AI Agents Builder"
}, {
  title: "Coding"
}, {
  title: "Customer Service"
}];
const BRANDS = [{
  label: "Mac",
  value: "mac"
}, {
  label: "Karts",
  value: "karts"
}, {
  label: "Baals",
  value: "baals"
}, {
  label: "Bukks",
  value: "bukks"
}, {
  label: "Luasis",
  value: "luasis"
}];
const OTHERS = [{
  label: "On Sale",
  value: "sale"
}, {
  label: "In Stock",
  value: "stock"
}, {
  label: "Featured",
  value: "featured"
}];
const COLORS = ["#1C1C1C", "#FF7A7A", "#FFC672", "#84FFB5", "#70F6FF", "#6B7AFF"];
export const getFilters = cache(async () => {
  return {
    brands: BRANDS,
    others: OTHERS,
    colors: COLORS,
    categories: CATEGORIES
  };
});
export const getProducts = cache(async ({
                                          term, category, rating, tags, page
}) => {
  const response = await axios.get("http://gateway:3000/agents", {
    params: {
      term, category, rating, tags, page
    }
  });

  return response.data[0];

});