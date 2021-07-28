import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Typography,
  AppBar,
  Paper,
  Tabs,
  Tab,
  Button,
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

import Carousel from "react-material-ui-carousel";
import About from "./About";
import Clients from "./Clients";
import Addons from "./Addons";

import useStyles from "../../styles";

const Body = (props) => {
  const classes = useStyles();

  const items = [
    {
      image: "https://source.unsplash.com/random",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      image: "https://source.unsplash.com/random",
      description: "Hello World!",
    },
    {
      image: "https://source.unsplash.com/random",
      description: "Probably the most random thing you have ever seen!",
    },
  ];

  function Item({ item }) {
    return (
      <Paper elevation={1}>
        <CardMedia className={classes.carousel} image={item.image} />
      </Paper>
    );
  }

  return (
    <>
      <Container maxWidth="xl" className={classes.containerCarousel}>
        <Typography
          variant="h2"
          style={{ top: 150 }}
          gutterBottom
          className={classes.carouselText}
        >
          ClientName
        </Typography>
        <Typography
          variant="h4"
          style={{ top: 250 }}
          gutterBottom
          className={classes.carouselText}
        >
          We pave the way for your success!
        </Typography>
        <Carousel
          autoPlay={true}
          interval={4000}
          animation="slide"
          fullHeightHover={false} // We want the nav buttons wrapper to only be as big as the button element is
          navButtonsProps={{
            // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
              backgroundColor: "cornflowerblue",
              borderRadius: 1,
            },
          }}
          indicatorIconButtonProps={{
            style: {
              padding: "10px", // 1
              color: "cornflowerblue", // 3
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              backgroundColor: "silver", // 2
            },
          }}
          indicatorContainerProps={{
            style: {
              marginTop: "10px", // 5
              textAlign: "right", // 4
            },
          }}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Container>
      <About />
      <Clients />
      <Addons />
    </>
  );
};

Body.propTypes = {};

export default Body;
