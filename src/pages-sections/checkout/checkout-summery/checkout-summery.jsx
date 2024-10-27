"use client";

import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField"; 
// LOCAL CUSTOM COMPONENT

import ListItem from "./list-item"; 
// GLOBAL CUSTOM COMPONENTS

import { Paragraph } from "components/Typography"; 
// CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "lib"; 
// GLOBAL CUSTOM HOOK

import useCart from "hooks/useCart";
export default function CheckoutSummary() {
  const {
    state
  } = useCart();
  const total = state.cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  return <Card sx={{
    p: 3
  }}>
      <ListItem mb={1} title="Subtotal" value={total} />
      <ListItem mb={1} title="Shipping" />
      <ListItem mb={1} title="Tax" value={0} />
      <ListItem mb={1} title="Discount" />

      <Divider sx={{
      my: 2
    }} />

      <Paragraph fontSize={25} fontWeight={600} lineHeight={1}>
        {currency(total)}
      </Paragraph>

      <Stack spacing={2} mt={3}>
        <TextField placeholder="Voucher" variant="outlined" size="small" fullWidth />
        <Button variant="outlined" color="primary" fullWidth>
          Apply Voucher
        </Button>
      </Stack>
    </Card>;
}