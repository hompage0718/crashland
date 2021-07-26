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

const Topics = (props) => {
  const classes = useStyles();

  const cards = ["AirportShuttleIcon", "AirplanemodeActiveIcon", "AppleIcon"];

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
            Topics and Discussion
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
                Latest Trends and News.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="md" className={classes.container}>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12}>
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

Topics.propTypes = {};

export default Topics;
