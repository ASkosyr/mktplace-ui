import Link from "next/link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button"; 
// GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { H3, H5 } from "components/Typography";
import { Carousel } from "components/carousel"; 
// STYLED COMPONENT

import { StyledGrid } from "./styles"; 
// CUSTOM DATA MODEL


// API FUNCTIONS
import api from "utils/__api__/grocery-2";
export default async function Section4() {
  const discountBanners = await api.getDiscountBannerList();
  return <div className="mb-3">
      <Carousel dots autoplay adaptiveHeight arrows={false} spaceBetween={0} slidesToShow={1}>
        {discountBanners.map((item, ind) => <div key={ind}>
            <StyledGrid container sx={{
          bgcolor: item.bgColor
        }}>
              <Grid item lg={7} sm={9} xs={12}>
                <H5 mb={1} fontWeight={600} fontSize={{
              sm: 18,
              xs: 14
            }}>
                  {item.subtitle}
                </H5>

                <H3 lineHeight="1.37" mb={{
              sm: 4,
              xs: 3
            }} fontSize={{
              sm: 35,
              xs: 24
            }}>
                  {item.title}
                </H3>

                <Button color="primary" variant="contained" LinkComponent={Link} href={item.shopUrl}>
                  Shop Now
                </Button>
              </Grid>

              <Grid item lg={5} xs={12} className="grid-2">
                <LazyImage width={320} height={200} alt={item.title} src={item.imgUrl} />
              </Grid>
            </StyledGrid>
          </div>)}
      </Carousel>
    </div>;
}