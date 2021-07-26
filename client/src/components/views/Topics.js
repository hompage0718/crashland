import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
  ImageList,
  ListSubheader,
  ImageListItem,
  ImageListItemBar,
} from "@material-ui/core";

import useStyles from "../../styles";

import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { red, blue } from "@material-ui/core/colors";

const Topics = (props) => {
  const classes = useStyles();

  const cards = [1, 2, 3];

  const itemData = [
    {
      img: "https://source.unsplash.com/random",
      title: "Title of the Topic",
      content: "私も一部何だかこの講義方という方のついでから考えですない",
    },
    {
      img: "https://source.unsplash.com/random",
      title: "Title of the Topic",
      content: "方という方のついでから考えですない",
    },
    {
      img: "https://source.unsplash.com/random",
      title: "Title of the Topic",
      content: "とにかくますないます。",
    },
    {
      img: "https://source.unsplash.com/random",
      title: "Title of the Topic Title",
      content: "男になっならものはいくら場合をとにかくますないます。",
    },
  ];

  return (
    <>
      <Container maxWidth="lg" className={classes.containerabout}>
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Topics
        </Typography>
        <Paper>
          <div className={classes.topicRoot}>
            <ImageList
              rowHeight={250}
              className={classes.topicImageList}
              cols={2}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img src={item.img} alt={item.title} />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item.content}
                    actionIcon={
                      <IconButton
                        aria-label={`info about ${item.title}`}
                        className={classes.topicIcon}
                      >
                        <Link to="/topics">
                          <KeyboardArrowRightIcon
                            fontSize="large"
                            style={{ color: blue[400] }}
                          />{" "}
                        </Link>
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Paper>
      </Container>
    </>
  );
};

Topics.propTypes = {};

export default Topics;
