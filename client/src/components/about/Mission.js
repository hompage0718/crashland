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

const Mission = (props) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Our Mission
      </Typography>
      <Typography variant="body2" component="h2">
        <p>
          もう以前を評めはすこぶるどんな吹聴ですですでもに当てるてしまいませとは参考なるないますて、ある程度にはありないたますです。
        </p>
      </Typography>
    </>
  );
};

Mission.propTypes = {};

export default Mission;
