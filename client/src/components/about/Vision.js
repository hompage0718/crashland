import React from "react";
import PropTypes from "prop-types";
import useStyles from "../../styles";

import {
  Typography,
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

const Vision = (props) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Our Vision
      </Typography>
      <Typography variant="body2" component="h2">
        <p>男になっならものはいくら場合をとにかくますないます。</p>
      </Typography>
    </>
  );
};

Vision.propTypes = {};

export default Vision;
