"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation"; 
// MUI

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Pagination from "@mui/material/Pagination"; 
// MUI ICON COMPONENTS

import Apps from "@mui/icons-material/Apps";
import ViewList from "@mui/icons-material/ViewList";
import FilterList from "@mui/icons-material/FilterList"; 
// GLOBAL CUSTOM COMPONENTS

import Sidenav from "components/side-nav";
import { H5, Paragraph, Span } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box";
import ProductFilters from "components/products-view/filters";
import ProductsGridView from "components/products-view/products-grid-view";
import ProductsListView from "components/products-view/products-list-view";
import SelectedSearchParams from "./search-params";
// TYPES

const SORT_OPTIONS = [{
  label: "Relevance",
  value: "relevance"
}, {
  label: "Date",
  value: "date"
}, {
  label: "Price Low to High",
  value: "asc"
}, {
  label: "Price High to Low",
  value: "desc"
}]; 
// ==============================================================


// ==============================================================
export default function ProductSearchPageView({
  results
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("term");
  const page = searchParams.get("page") || "1";
  const pageCount = Math.trunc(results.totalResults[0] ? (results.totalResults[0].total / 10) : 0);

  const handleChangeSearchParams = (key, value) => {
    if (!key || !value) return;
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    console.log("new url:" + `${pathname}?${params.toString()}`);
    router.push(`${pathname}?${params.toString()}`);
  };

  return <div className="bg-white pt-2 pb-4">
      <Container>
        {
        /* FILTER ACTION AREA */
      }
        <FlexBetween flexWrap="wrap" gap={2} mb={2}>
          {query ? <div>
              <H5 mb={0.5}>Searching for “{query}”</H5>
              <Paragraph color="grey.600">
                {results.totalResults[0] ? results.totalResults[0].total : 0} results found
              </Paragraph>
            </div> : <div />}

          <FlexBox alignItems="center" columnGap={4} flexWrap="wrap">
            <FlexBox alignItems="center" gap={1} flex="1 1 0">
              <Paragraph color="grey.600" whiteSpace="pre">
                Sort by:
              </Paragraph>

              <TextField select fullWidth size="small" value="relevance" variant="outlined" placeholder="Sort by" onChange={e => handleChangeSearchParams("sort", e.target.value)} sx={{
              flex: "1 1 0",
              minWidth: "150px"
            }}>
                {SORT_OPTIONS.map(item => <MenuItem value={item.value} key={item.value}>
                    {item.label}
                  </MenuItem>)}
              </TextField>
            </FlexBox>

            <FlexBox alignItems="center" my="0.25rem">
              {
                /* SHOW IN THE SMALL DEVICE */
              }
              <Box display={{
              md: "none",
              xs: "block"
            }}>
                <Sidenav handler={close => <IconButton onClick={close}>
                      <FilterList fontSize="small" />
                    </IconButton>}>
                  <Box px={3} py={2}>
                    <SelectedSearchParams />

                    <ProductFilters filters={results} />
                  </Box>
                </Sidenav>
              </Box>
            </FlexBox>
          </FlexBox>
        </FlexBetween>

        {<Grid container spacing={4}>

          <Grid item xl={2} md={3} sx={{
          display: {
            md: "block",
            xs: "none"
          }
        }}>
            <SelectedSearchParams />

            <ProductFilters filters={results} />
          </Grid>

          {
          /* PRODUCT VIEW AREA */
        }
          {<Grid item xl={10} md={9} xs={12}>
            <ProductsListView products={results.results} />

            <FlexBetween flexWrap="wrap" mt={6}>
              <Span color="grey.600">
                Showing {(page - 1) * 10 + 1}-{page * 10} of {results.totalResults[0] ? results.totalResults[0].total : 0} Agents
              </Span>

              <Pagination color="primary" variant="outlined" page={+page} count={pageCount} onChange={(_, page) => handleChangeSearchParams("page", page.toString())} />
            </FlexBetween>
          </Grid>}
        </Grid>}
      </Container>
    </div>;
}