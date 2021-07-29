import React, { useState, Fragment } from "react";
import useStyles from "../../styles";

import WhoWeAre from "./WhoWeAre";
import Mission from "./Mission";
import Vision from "./Vision";

import {
  Typography,
  Paper,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Grid,
  Container,
} from "@material-ui/core";

const AboutUs = (props) => {
  window.scrollTo(0, 0);

  const classes = useStyles();

  const [who, setWho] = useState(true);
  const [mission, setMission] = useState(false);
  const [vision, setVision] = useState(false);

  return (
    <>
      <Paper elevation={2}>
        <Container maxWidth="lg" className={classes.containerheader}>
          <Typography
            variant="h3"
            align="left"
            color="textPrimary"
            // gutterBottom
          >
            About Us
          </Typography>
        </Container>
      </Paper>
      <body>
        <Container maxWidth="md" className={classes.containerheader}>
          <Grid item md={12} className={classes.pagetopbutton}>
            <Grid item>
              <ButtonGroup
                className={classes.buttongrouppage}
                size="large"
                aria-label="large outlined primary button group"
                variant="text"
              >
                <Button
                  onClick={() => {
                    setWho(true);
                    setMission(false);
                    setVision(false);
                  }}
                  className={classes.btnAboutUs}
                >
                  WHO WE ARE
                </Button>
                <Button
                  onClick={() => {
                    setWho(false);
                    setMission(true);
                    setVision(false);
                  }}
                  className={classes.btnAboutUs}
                >
                  OUR MISSION
                </Button>
                <Button
                  onClick={() => {
                    setWho(false);
                    setMission(false);
                    setVision(true);
                  }}
                  className={classes.btnAboutUs}
                >
                  OUR VISION
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="md" className={classes.containerheader}>
          <Grid item md={12} className={classes.contentcenter}>
            <Grid item>
              <Card variant="outlined">
                <CardContent>
                  {who && <WhoWeAre />}
                  {mission && <Mission />}
                  {vision && <Vision />}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </body>
    </>
  );
};

AboutUs.propTypes = {};

export default AboutUs;
