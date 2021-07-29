import React from "react";
import useStyles from "../../styles";

import { Typography } from "@material-ui/core";

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
