import React from "react";
import { Link } from "react-router-dom";

import {
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
} from "@material-ui/core";

import { lime, green, blue, teal } from "@material-ui/core/colors";

import FastfoodIcon from "@material-ui/icons/Fastfood";
import HotelIcon from "@material-ui/icons/Hotel";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import useStyles from "../../styles";

const Service = (props) => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" className={classes.containerServices}>
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Our Services
        </Typography>
        <Grid container spacing={4} className={classes.serviceGrid}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <FastfoodIcon
                style={{ color: lime[400] }}
                className={classes.serviceIcon}
              />
              <CardContent>
                <Link to="/clients">
                  <Typography variant="h6">Fast Food</Typography>{" "}
                </Link>
                <Typography variant="body2">
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <HotelIcon
                style={{ color: green[500] }}
                className={classes.serviceIcon}
              />
              <CardContent>
                <Link to="/clients">
                  <Typography variant="h6">Hotel and Services</Typography>
                </Link>
                <Typography variant="body2">
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <DirectionsCarIcon
                style={{ color: blue[400] }}
                className={classes.serviceIcon}
              />
              <CardContent>
                <Link to="/clients">
                  <Typography variant="h6">Automobile</Typography>
                </Link>
                <Typography variant="body2">
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <ShoppingCartIcon
                style={{ color: teal[400] }}
                className={classes.serviceIcon}
              />
              <CardContent>
                <Link to="/clients">
                  <Typography variant="h6">Retail</Typography>
                </Link>
                <Typography variant="body2">
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

Service.propTypes = {};

export default Service;
