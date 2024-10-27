import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; 
// LOCAL CUSTOM COMPONENT

import Card3 from "./card"; 
// API FUNCTIONS

import api from "utils/__api__/gadget-1";
export default async function Section3() {
  const [first, second] = await api.getTwoBanner();
  return <Container className="mt-4">
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <Card3 title={first.title} imgUrl={first.thumbnail} body={first.description} />
        </Grid>

        <Grid item md={6} xs={12}>
          <Card3 color="white" bgColor="grey.600" title={second.title} body={second.description} imgUrl={second.thumbnail} />
        </Grid>
      </Grid>
    </Container>;
}