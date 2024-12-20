import { Fragment } from "react"; 
// GLOBAL CUSTOM COMPONENTS

import { Paragraph } from "components/Typography"; 
// STYLED COMPONENTS

import { Heading } from "./styles"; 
// ==============================================================


// ==============================================================
export default function FooterContact({
  email,
  phone,
  address,
  color = "grey.500"
}) {
  return <Fragment>
      <Heading>Contact Us</Heading>

      <Paragraph py={0.6} color={color}>
        {address}
      </Paragraph>

      <Paragraph py={0.6} color={color}>
        Email: {email}
      </Paragraph>

      <Paragraph py={0.6} mb={2} color={color}>
        Phone: {phone}
      </Paragraph>
    </Fragment>;
}