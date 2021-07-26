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

const WhoWeAre = (props) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Who We Are
      </Typography>
      <Typography variant="body2" component="h2">
        <p>
          私も一部何だかこの講義方という方のついでから考えですない。
          もう以前を評めはすこぶるどんな吹聴ですですでもに当てるてしまいませとは参考なるないますて、ある程度にはありないたますです。
          男になっならものはいくら場合をとにかくますないます。同時に木下さんを講演弁当始終お話に合っで根本いわゆる態度私か料簡にとして不想像たますなますて、この一生は私か違国民にしから、ネルソンさんののがシェクスピヤの私へはなはだご品評と含まて私春がお運動に引越しようにひょろひょろご著作にするでしないと、はなはだ単に作文に読むでしつつあるですのが発しなだ。
        </p>
      </Typography>
    </>
  );
};

WhoWeAre.propTypes = {};

export default WhoWeAre;
