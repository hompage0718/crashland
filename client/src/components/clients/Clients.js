import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import useStyles from "../../styles";

import {
  Typography,
  Icon,
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

import { red, blue } from "@material-ui/core/colors";

import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import AppleIcon from "@material-ui/icons/Apple";
import ApartmentIcon from "@material-ui/icons/Apartment";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";

const Clients = (props) => {
  window.scrollTo(0, 0);

  const classes = useStyles();

  const cards = [
    "AirportShuttleIcon",
    "AirplanemodeActiveIcon",
    "AppleIcon",
    "ApartmentIcon",
    "ApartmentIcon",
    "DirectionsCarIcon",
  ];

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
            Our Clients
          </Typography>
        </Container>
      </Paper>
      <body>
        <Container maxWidth="md" className={classes.container}>
          <Grid item md={12} className={classes.pagetopbutton}>
            <Grid item>
              <Typography
                variant="h6"
                align="left"
                color="textPrimary"
                // gutterBottom
              >
                We strive to be the best business partner.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="md" className={classes.container}>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h6">Heading</Typography>
                    <Typography variant="body2">
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image Title"
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </body>
    </>
  );
};

Clients.propTypes = {};

export default Clients;
