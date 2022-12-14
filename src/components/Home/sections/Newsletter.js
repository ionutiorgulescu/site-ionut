/* eslint-disable react/jsx-no-duplicate-props */
/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";

// Material Kit 2 React components
import MKBox from "../../MKBox";
import MKTypography from "../../MKTypography";
import MKInput from "../../MKInput";

// Images
import macbook from "../../../assets/images/macbook.png";

function Newsletter() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const resetFormValues = () => {
    reset(
      {
        from_name: "",
        from_email: "",
        message: "",
      },
      {
        keepErrors: true,
        keepDirty: true,
      }
    );
  };

  const sendEmail = (data) => {
    setLoading(true);
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        data,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          resetFormValues();
          setLoading(false);
        },
        () => {
          resetFormValues();
          setLoading(false);
        }
      );
  };

  return (
    <MKBox component="section">
      <Container>
        <Grid container alignItems="center">
          <Grid item sx={12} md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h4" sx={{ textAlign: "center" }}>
              Contact
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={3} sx={{ textAlign: "center" }}>
              Write me a message and I will get up to you shortly.
            </MKTypography>
            <form onSubmit={handleSubmit(sendEmail)}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <MKInput
                    type="text"
                    label="Name..."
                    fullWidth
                    {...register("from_name")}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    type="email"
                    label="Email..."
                    fullWidth
                    {...register("from_email")}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    label="Message..."
                    multiline
                    rows={5}
                    fullWidth
                    {...register("message")}
                    required
                  />
                </Grid>
                <Grid item xs={8}>
                  <LoadingButton
                    variant="contained"
                    color="primary"
                    style={{ color: "white" }}
                    sx={{ height: "100%" }}
                    type="submit"
                    loading={loading}
                  >
                    Submit
                  </LoadingButton>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={macbook} alt="macbook" width="100%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
