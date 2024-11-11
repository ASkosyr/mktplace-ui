"use client";

import {Fragment} from "react";
import Chip from "@mui/material/Chip";
// MUI
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import FormGroup from "@mui/material/FormGroup";
// GLOBAL CUSTOM COMPONENTS
import AccordionHeader from "components/accordion";
import {H6, Span} from "components/Typography";
// LOCAL CUSTOM COMPONENTS
import CheckboxLabel from "./checkbox-label";
// CUSTOM LOCAL HOOK
import useProductFilterCard from "./use-product-filter-card";
// TYPES

export default function ProductFilters({
                                           filters
}) {

  const {
    categoryFacet,
      tagsFacet
  } = filters;
  const {
    rating,
    tags,
      handleChangeSearchParams,
      handleChangeRating
  } = useProductFilterCard();

    console.log("tagsFacet:" + JSON.stringify(tagsFacet));

  return <div>
      {
      /* CATEGORY VARIANT FILTER */
    }
      <H6 mb={1.25}>Categories</H6>
      {categoryFacet.map(item => <Fragment key={item._id}>

          <Span onClick={() => handleChangeSearchParams("category", item._id.toString())}>{item._id}</Span>(<Span>{item.count}</Span>)

          </Fragment> )}

      <Box component={Divider} my={3} />

      <H6 mb={1.25}>Tags</H6>
      {tagsFacet.map(item => (
          <Chip label={item._id} variant="outlined" onClick={() => handleChangeSearchParams("tags", item._id.toString())}/>
      ))}

      <Box component={Divider} my={3} />

      {
      /* PRICE VARIANT FILTER */
    }
      {/*<H6 mb={2}>Price Range</H6>

      <Slider min={0} max={30} size="small" value={prices} valueLabelDisplay="uto" valueLabelFormat={v => `$${v}`} onChange={(_, v) => handleChangePrice(v)} />
      <FlexBetween>
        <TextField fullWidth size="small" type="number" placeholder="0" value={prices[0]} onChange={e => handleChangePrice([+e.target.value, prices[1]])} />

        <H5 color="grey.600" px={1}>
          -
        </H5>

        <TextField fullWidth size="small" type="number" placeholder="250" value={prices[1]} onChange={e => handleChangePrice([prices[0], +e.target.value])} />
      </FlexBetween>

      <Box component={Divider} my={3} />*/}

      {
      /* BRAND VARIANT FILTER */
    }
      {/*<H6 mb={2}>Brands</H6>
      <FormGroup>
        {BRANDS.map(({
        label,
        value
      }) => <CheckboxLabel key={value} label={label} checked={brands.includes(value)} onChange={() => handleChangeBrand(value)} />)}
      </FormGroup>

      <Box component={Divider} my={3} />*/}

      {
      /* SALES OPTIONS */
    }
     {/* <FormGroup>
        {OTHERS.map(({
        label,
        value
      }) => <CheckboxLabel key={value} label={label} checked={sales.includes(value)} onChange={() => handleChangeSales(value)} />)}
      </FormGroup>

      <Box component={Divider} my={3} />*/}

      {
      /* RATINGS FILTER */
      }
      <H6 mb={2}>Ratings</H6>
      <FormGroup>
        {[5, 4, 3, 2, 1].map(item => <CheckboxLabel key={item} checked={rating === item}
             onChange={() => handleChangeSearchParams("rating", item.toString())}
             label={<Rating size="small" value={item} color="warn" readOnly />} />)}
      </FormGroup>

      <Box component={Divider} my={3} />

      {
      /* COLORS VARIANT FILTER */
    }
     {/* <H6 mb={2}>Colors</H6>
      <FlexBox mb={2} flexWrap="wrap" gap={1.5}>
        {COLORS.map(item => <Box key={item} bgcolor={item} onClick={() => handleChangeColor(item)} sx={{
        width: 25,
        height: 25,
        flexShrink: 0,
        outlineOffset: 1,
        cursor: "pointer",
        outlineColor: item,
        borderRadius: "50%",
        outline: colors.includes(item) ? 1 : 0
      }} />)}
      </FlexBox>*/}
    </div>;
}