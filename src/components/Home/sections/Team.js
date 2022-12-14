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

// Material Kit 2 React components
import MKBox from "../../MKBox";
import MKTypography from "../../MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "../../Cards/TeamCards/HorizontalTeamCard";

// Images
import frontend from "../../../assets/images/frontend.jpg";
import backend from "../../../assets/images/backend.jpg";
import devops from "../../../assets/images/devops.jpg";
import blockchain from "../../../assets/images/blockchain.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Main skills
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
              at. That&apos;s my skill.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={frontend}
                name="Frontend"
                position={{ color: "info", label: "React" }}
                description="Developed and maintained front-ends focused on user experience."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={backend}
                name="Backend"
                position={{ color: "info", label: "NestJS" }}
                description="Architected, implemented, and maintained performant and scalable data-processing back-end systems."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={devops}
                name="Devops"
                position={{ color: "info", label: "AWS/GCLOUD/DO" }}
                description="Developed cluster projects and utilized public cloud, computing infrastructure services."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={blockchain}
                name="Blockchain"
                position={{ color: "info", label: "EthersJS/Web3" }}
                description="Write Smart Contracts and unit tests for Smart Contracts."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
