import React, { Fragment } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
  Paper,
} from "@material-ui/core";

import useStyles from "../../styles";

const Testimonials = (props) => {
  const classes = useStyles();

  const itemData = [
    {
      name: "Utada Hikaru",
      image: "https://source.unsplash.com/random",
      description: "Very good working experience!",
    },
    {
      name: "Maiko Kanami",
      image: "https://source.unsplash.com/random",
      description: "Friendly and supportive staff.",
    },
    {
      name: "Hikari Ohana",
      image: "https://source.unsplash.com/random",
      description: "Good clients, good working environment.",
    },
    {
      name: "Asahi Ko",
      image: "https://source.unsplash.com/random",
      description: "Love the work that I do!",
    },
    {
      name: "Takanami Maru",
      image: "https://source.unsplash.com/random",
      description: "Nice people. Fun to be with!",
    },
  ];

  function Item(props) {
    return (
      <Paper elevation={2} style={{ maxHeight: 350, overflow: "auto" }}>
        {itemData.map((item) => (
          <List key={item.name} className={classes.testiroot} borderBottom={1}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt={item.name}
                  src={item.image}
                  className={classes.avatarlarge}
                />
              </ListItemAvatar>
              <ListItemText
                className={classes.testiinline}
                primary={item.name}
                secondary={
                  <Fragment>
                    <Typography
                      className={classes.testiinline}
                      // component="button"
                      variant="string"
                      onClick={() => {
                        console.info("I'm a button.");
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Fragment>
                }
              />
            </ListItem>
          </List>
        ))}
      </Paper>
    );
  }

  return (
    <>
      <Container maxWidth="lg" className={classes.containerabout}>
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Testimonials
        </Typography>
        <div className={classes.topicRoot}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image Title"
                />
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Item />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

Testimonials.propTypes = {};

export default Testimonials;
