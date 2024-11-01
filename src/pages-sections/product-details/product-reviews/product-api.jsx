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
export default async function ProductAPI() {

  return <div>
              <H5 mb={1}>Lead Generation API</H5>

      <Paragraph color="grey.700">Path parameters</Paragraph>
      <ul>
          <li><strong>text</strong> - description of the lead</li>
          <li><strong>num</strong> - number of leads to return</li>
      </ul>


    </div>;
}