"use client";

import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
// LOCAL CUSTOM COMPONENTS


import BazaarTextField from "components/BazaarTextField";
import {Wrapper} from "../../cart/styles";
export default function ServiceAPIForm() {

    const initialValues = {
        text: "Example text",
        num: "3"
    };

    const validationSchema = yup.object().shape({
        text: yup.string().required("Description is required"),
        num: yup.string().required("Number of results must be provided")
    });
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit
    } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: values => {
            console.log(values);
        }
    });
    return
    <Wrapper>
    <form onSubmit={handleSubmit}>
        <BazaarTextField mb={1.5} fullWidth name="text" size="small" variant="outlined" onBlur={handleBlur} value={values.email}
                         onChange={handleChange} label="Email or Phone Number" />

        <BazaarTextField mb={2} fullWidth size="small" name="num" label="Number of results to return" autoComplete="on"
                         variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.password}
                         type="text"  />

        <Button fullWidth type="submit" color="primary" variant="contained" size="large">
            Try out
        </Button>
    </form>
    </Wrapper>;
}