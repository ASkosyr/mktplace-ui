import Box from "@mui/material/Box";
import Container from "@mui/material/Container"; 
// GLOBAL CUSTOM COMPONENTS

import { Carousel } from "components/carousel";
import CarouselCard1 from "components/carousel-cards/carousel-card-1"; 
// API FUNCTIONS

import api from "utils/__api__/fashion-2";
import {H1} from "../../../components/Typography";
import TextField from "@mui/material/TextField";
import {SearchOutlinedIcon} from "../../grocery-1/section-1/styles";
import Button from "@mui/material/Button";
import {SearchInput} from "../../../components/search-box";
import {Header} from "../../../components/header";
export default async function Section1() {
  const carouselData = await api.getMainCarouselData();

  return <Box bgcolor="grey.100" mb={7.5}>

      <Container className="pt-2 pb-2">
        <Carousel dots spaceBetween={0} slidesToShow={1} arrows={false}>
          {carouselData.map((item, ind) => <CarouselCard1 key={ind} buttonColor="dark" title={item.title} imgUrl={item.imgUrl} buttonLink={item.buttonLik} buttonText={item.buttonText} description={item.description} />)}
        </Carousel>
      </Container>
    </Box>;
}