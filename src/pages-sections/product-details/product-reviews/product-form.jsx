"use client";

import { useState, useEffect } from 'react'
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import Card from "@mui/material/Card";
// LOCAL CUSTOM COMPONENTS


import BazaarTextField from "components/BazaarTextField";
import {Wrapper} from "../../cart/styles";
export default function ServiceAPIForm({
                                           product
                                       }) {
    const [data, setData] = useState(null)

    const initialValues = {
        text: "Example text",
        num: "3"
    };

    const fetchImage = async (url) => {
        try {
            const response = await fetch(url);
            const imageBytes = await response.arrayBuffer();
            var blob = new Blob([imageBytes], { type: "image/jpeg" });
            var imageUrl = URL.createObjectURL(blob);
            return imageUrl;
        } catch (error) {
            console.log("ERROR:", error);
        }
    };

    const loadData = async () => {
        const imageSrc = await fetchImage('http://localhost:8081/execute/' + product.serviceName + '/action');
        console.log(imageSrc);
        setData(imageSrc);
    }

    return <div>
            <BazaarTextField mb={1.5} name="subject" size="small" variant="outlined"
                             label="Description of the image to generate" />

            <Button fullWidth mb={1.5} color="primary" variant="outlined" size="small" onClick={loadData}>
                Try out
            </Button>
        {data && <Image
            src={data}
            width={100}
            height={100}
        />}
    </div>
}