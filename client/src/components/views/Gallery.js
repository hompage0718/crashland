import React from "react";
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

import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import itemData from "./itemData";

import useStyles from "../../styles";

const Gallery = (props) => {
  const classes = useStyles();

  const itemData = [
    {
      img: "https://source.unsplash.com/random",
    },
    {
      img: "https://source.unsplash.com/random",
    },
    {
      img: "https://source.unsplash.com/random",
    },
    {
      img: "https://source.unsplash.com/random",
    },
    {
      img: "https://source.unsplash.com/random",
    },
    {
      img: "https://source.unsplash.com/random",
    },
    {
      img: "https://source.unsplash.com/random",
    },
    {
      img: "https://source.unsplash.com/random",
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
          Gallery
        </Typography>
        <div className={classes.galleryRoot}>
          <ImageList
            rowHeight={160}
            className={classes.galleryImageList}
            cols={3}
          >
            {itemData.map((item, index) => (
              <ImageListItem key={index} cols={item.cols || 1}>
                <img src={item.img} alt={item.title} />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </Container>
    </>
  );
};

Gallery.propTypes = {};

export default Gallery;
