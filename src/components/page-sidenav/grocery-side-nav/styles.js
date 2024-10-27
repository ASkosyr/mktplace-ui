"use client";

import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";
export const StyledCard = styled(Card)(({
  theme
}) => ({
  
// height: "100%",
  overflow: "auto",
  maxHeight: "90dvh",
  borderRadius: 8,
  position: "relative",
  padding: "20px 20px 14px 24px",
  "& .accordion": {
    padding: 0,
    cursor: "pointer",
    ":hover": {
      color: theme.palette.primary.main
    }
  }
}));