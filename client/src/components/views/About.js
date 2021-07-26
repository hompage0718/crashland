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
} from "@material-ui/core";

import { red, blue } from "@material-ui/core/colors";

import SpaSharpIcon from "@material-ui/icons/SpaSharp";

import useStyles from "../../styles";

const About = (props) => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" className={classes.containerabout}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={6}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <SpaSharpIcon
                  // fontSize="large"
                  style={{ color: blue[800] }}
                  className={classes.largeIcon}
                />
                <Typography gutterBottom variant="h5">
                  About Us
                </Typography>
                <Typography>
                  いやあ、見事に晴れ渡った秋の日になったね。これが台風一過というやつかね。
                  あんたらの名前なんか興味ないね。どうせこの仕事が終わるとお別れだ。
                  あら、申し訳ございません。
                  いやしくも何かをするなら、じょうずにやりなさい。
                  イルカは人間に次いで最も知能が高く、やがては彼らとの対話も夢ではないと考えている科学者もいる。
                </Typography>
              </CardContent>
              {/* <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image Title"
              /> */}
              <CardActions>
                <Button size="medium" color="primary">
                  <Link to="/aboutus">More </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="About"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

About.propTypes = {};

export default About;
