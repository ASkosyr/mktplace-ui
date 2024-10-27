"use client";

import { useRouter } from "next/navigation"; 
// MUI

import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function LoginModalPage({
  children
}) {
  const router = useRouter();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down("xs"));
  return <Dialog scroll="body" open={true} fullWidth={isMobile} onClose={router.back} sx={{
    zIndex: 9999
  }}>
      {children}
    </Dialog>;
}