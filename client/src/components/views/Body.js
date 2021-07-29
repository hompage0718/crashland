import React, { Fragment } from "react";

import { Typography, Paper, CardMedia, Container } from "@material-ui/core";

import Carousel from "react-material-ui-carousel";
import About from "./About";
import Clients from "./Clients";
import Contact from "./Contact";
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
        <Typography gutterBottom className={classes.carouselTextone}>
          ClientName
        </Typography>
        <Typography gutterBottom className={classes.carouselTexttwo}>
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
      <Contact />
      <Addons />
    </>
  );
};

Body.propTypes = {};

export default Body;
