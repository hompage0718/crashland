import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import useStyles from "../../styles";

import WhoWeAre from "./WhoWeAre";
import Mission from "./Mission";
import Vision from "./Vision";

import {
  Typography,
  AppBar,
  Paper,
  Tabs,
  Tab,
  Button,
  ButtonGroup,
  IconButton,
  Menu,
  MenuItem,
  Hidden,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";

const AboutUs = (props) => {
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
        <Container maxWidth="md" className={classes.container}>
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
                  className={classes.btnpadone}
                >
                  WHO WE ARE
                </Button>
                <Button
                  onClick={() => {
                    setWho(false);
                    setMission(true);
                    setVision(false);
                  }}
                  className={classes.btnpadone}
                >
                  OUR MISSION
                </Button>
                <Button
                  onClick={() => {
                    setWho(false);
                    setMission(false);
                    setVision(true);
                  }}
                  className={classes.btnpadone}
                >
                  OUR VISION
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="md" className={classes.container}>
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
