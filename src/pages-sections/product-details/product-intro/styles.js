"use client";

import styled from "@mui/material/styles/styled";
export const StyledRoot = styled("div")(({
  theme
}) => ({
  width: "100%",
  "& strong": {
    fontWeight: 600
  },
  "& .rating": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  "& .price": {
    paddingTop: theme.spacing(1),
    marginBottom: theme.spacing(3)
  },
  "& .shop": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1)
  },
  "& .variant-group": {
    gap: "0.5rem",
    display: "flex",
    alignItems: "center",
    "& .MuiChip-root": {
      height: 28,
      cursor: "pointer",
      borderRadius: "6px"
    }
  }
}));
export const ProductImageWrapper = styled("div")(({
  theme
}) => ({
  height: 100,
  display: "flex",
  overflow: "hidden",
  position: "relative",
  justifyContent: "left",
  borderRadius: theme.spacing(3),
  marginBottom: theme.spacing(6),
  "& img": {
    objectFit: "contain"
  },
  [theme.breakpoints.down("sm")]: {
    height: 100
  },
  "& + .preview-images": {
    overflow: "auto",
    display: "flex",
    gap: theme.spacing(1),
    justifyContent: "left"
  }
}));
export const PreviewImage = styled("div", {
  shouldForwardProp: prop => prop !== "selected"
})(({
  theme,
  selected
}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  width: 64,
  height: 64,
  cursor: "pointer",
  position: "relative",
  backgroundColor: "white",
  opacity: selected ? 1 : 0.5,
  transition: "all 0.2s ease-in-out",
  border: `1px solid ${selected ? theme.palette.primary.main : theme.palette.grey[400]}`
}));