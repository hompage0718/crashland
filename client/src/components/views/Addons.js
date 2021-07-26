import React, { useState } from "react";
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

import { red, blue } from "@material-ui/core/colors";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

import useStyles from "../../styles";

import Testimonials from "./Testimonials";
import Topics from "./Topics";
import Gallery from "./Gallery";

const Addons = (props) => {
  const classes = useStyles();

  const [topic, setTopic] = useState(false);
  const [testi, setTesti] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [job, setJob] = useState(false);

  const handleClick = (value) => {
    setTopic(false);
    setTesti(false);
    setGallery(false);
    setJob(false);

    if (value === "topic") setTopic(true);
    if (value === "testi") setTesti(true);
    if (value === "gallery") setGallery(true);
    if (value === "job") setJob(true);
  };

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Explore More Items
        </Typography>
        <div className={classes.containerheader}>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={6} md={3} className={classes.addonIcon}>
              <Button
                onClick={(e) => {
                  handleClick("topic");
                }}
              >
                <MenuBookIcon
                  style={{ color: blue[800] }}
                  className={classes.largerIcon}
                />
              </Button>

              <Typography
                variant="h6"
                align="center"
                color={topic ? "primary" : "textPrimary"}
              >
                Topics
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={3} className={classes.addonIcon}>
              <Button
                onClick={(e) => {
                  handleClick("testi");
                }}
              >
                <ChatBubbleOutlineIcon
                  style={{ color: blue[800] }}
                  className={classes.largerIcon}
                />
              </Button>
              <Typography
                variant="h6"
                align="center"
                color={testi ? "primary" : "textPrimary"}
              >
                Testimonials
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={3} className={classes.addonIcon}>
              <Button
                onClick={(e) => {
                  handleClick("gallery");
                }}
              >
                <PhotoCameraIcon
                  style={{ color: blue[800] }}
                  className={classes.largerIcon}
                />
              </Button>
              <Typography
                variant="h6"
                align="center"
                color={gallery ? "primary" : "textPrimary"}
              >
                Gallery
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={3} className={classes.addonIcon}>
              <Button
                onClick={(e) => {
                  handleClick("job");
                }}
              >
                <WorkOutlineIcon
                  style={{ color: blue[800] }}
                  className={classes.largerIcon}
                />
              </Button>
              <Typography
                variant="h6"
                align="center"
                color={job ? "primary" : "textPrimary"}
              >
                Job Opportunities
              </Typography>
            </Grid>
          </Grid>
        </div>
        {topic && <Topics />}
        {testi && <Testimonials />}
        {gallery && <Gallery />}
      </Container>
    </>
  );
};

Addons.propTypes = {};

export default Addons;
