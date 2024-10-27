import { useState } from "react"; 
// MUI

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import TextField from "@mui/material/TextField";
import ButtonBase from "@mui/material/ButtonBase";

// FORMIK
import { useFormikContext } from "formik"; 
// LOCAL CUSTOM COMPONENT

import { FlexBox } from "components/flex-box";
export default function Voucher() {
  const {
    values,
    errors,
    touched,
    handleChange,
    setFieldValue
  } = useFormikContext();
  const [hasVoucher, setHasVoucher] = useState(false);
  return <Box mb={3}>
      <ButtonBase disableRipple onClick={() => setHasVoucher(state => !state)} sx={{
      color: "primary.main",
      fontWeight: 600
    }}>
        I have a voucher
      </ButtonBase>

      <Collapse in={hasVoucher}>
        <FlexBox mt={3} gap={2} maxWidth="400px">
          <TextField fullWidth name="voucher" value={values.voucher} onChange={handleChange} placeholder="Enter voucher code here" />
          <Button variant="contained" color="primary" type="button">
            Apply
          </Button>
        </FlexBox>
      </Collapse>
    </Box>;
}