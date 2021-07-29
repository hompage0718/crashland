import React, { Fragment } from "react";
import useStyles from "../../styles";

import {
  Typography,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
} from "@material-ui/core";

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
        <Container maxWidth="md" className={classes.containerheader}>
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
        <Container maxWidth="md" className={classes.containerheader}>
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
