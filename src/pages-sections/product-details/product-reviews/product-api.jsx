import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating"; 
// LOCAL CUSTOM COMPONENT

import ReviewForm from "./review-form"; 
// GLOBAL CUSTOM COMPONENTS

import { H3, H5, H6, Paragraph, Span } from "components/Typography"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { getDateDifference } from "lib"; 
// STYLED COMPONENTS

import { ReviewRoot } from "./styles"; 
// API FUNCTIONS
export default async function ProductAPI({
                                             product
                                         }) {

  return <div>
              <H5 mb={1}>API specification</H5>

      <div dangerouslySetInnerHTML={{ __html: product.api }} />

    </div>;
}