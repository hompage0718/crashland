import React from "react";

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

const Topics = (props) => {
  window.scrollTo(0, 0);

  const classes = useStyles();

  const cards = [1, 2, 3, 4, 5, 6, 7, 8];

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
            <Grid item xs={12}>
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
          </Grid>
        </Container>
        <Container maxWidth="md" className={classes.container}>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={4} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h6">Heading</Typography>
                    <Typography variant="body2">
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
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
