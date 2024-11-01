"use client";

import { Fragment, useState } from "react"; 
// MUI

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import styled from "@mui/material/styles/styled";
import ServiceAPIForm from "./product-reviews/product-form";
// STYLED COMPONENT

const StyledTabs = styled(Tabs)(({
  theme
}) => ({
  minHeight: 0,
  marginTop: 80,
  marginBottom: 24,
  borderBottom: `1px solid ${theme.palette.text.disabled}`,
  "& .inner-tab": {
    minHeight: 40,
    fontWeight: 600,
    textTransform: "capitalize"
  }
})); 
// ==============================================================


// ==============================================================
export default function ProductTabs({
  api,
  description,
  serviceAPIForm
}) {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleChangeTab = (_, value) => setSelectedOption(value);

  return <Fragment>
      <StyledTabs textColor="primary" value={selectedOption} indicatorColor="primary" onChange={handleChangeTab}>
        <Tab className="inner-tab" label="Description" />
        <Tab className="inner-tab" label="API documentation" />
        <Tab className="inner-tab" label="Try it out" />
        {/*<Tab className="inner-tab" label="Review (3)" />*/}
      </StyledTabs>

      <div className="mb-3">
        {selectedOption === 0 && description}
        {selectedOption === 1 && api}
        {selectedOption === 2 && serviceAPIForm}
        {/*{selectedOption === 3 && <ProductReviews />}*/}
      </div>
    </Fragment>;
}