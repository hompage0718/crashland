import React from "react";
import { Link } from "react-router-dom";

import {
  Typography,
  Button,
  Hidden,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Container,
} from "@material-ui/core";

import { blue } from "@material-ui/core/colors";

import SpaSharpIcon from "@material-ui/icons/SpaSharp";

import useStyles from "../../styles";

const About = (props) => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" className={classes.containerAbout}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={8}>
            <Card className={classes.card}>
              <CardContent className={classes.aboutText}>
                <SpaSharpIcon
                  style={{ textAlign: "center", color: blue[800] }}
                  className={classes.largeIcon}
                />
                <Typography
                  style={{ textAlign: "center" }}
                  variant="h4"
                  gutterBottom
                >
                  About Us
                </Typography>
                <Typography
                  className={classes.aboutusText}
                  variant="h6"
                  gutterBottom
                >
                  いやあ、見事に晴れ渡った秋の日になったね。これが台風一過というやつかね。
                  あんたらの名前なんか興味ないね。どうせこの仕事が終わるとお別れだ。
                  あら、申し訳ございません。
                  いやしくも何かをするなら、じょうずにやりなさい。
                  イルカは人間に次いで最も知能が高く、やがては彼らとの対話も夢ではないと考えている科学者もいる。
                </Typography>
              </CardContent>

              <CardActions className={classes.aboutusText}>
                <Button size="medium" color="primary">
                  <Link to="/aboutus">More </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Hidden smDown>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <CardMedia
                      style={{ borderRadius: "50%" }}
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="About"
                    />
                  </Grid>
                  <Grid item xs></Grid>
                  <Grid item xs></Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs></Grid>
                  <Grid item xs={6}>
                    <CardMedia
                      style={{ borderRadius: "50%" }}
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="About"
                    />
                  </Grid>
                  <Grid item xs></Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs></Grid>
                  <Grid item xs={6}>
                    <Grid item xs></Grid>
                    <CardMedia
                      style={{ borderRadius: "50%" }}
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="About"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs></Grid>
                  <Grid item xs={6}>
                    <CardMedia
                      style={{ borderRadius: "50%" }}
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="About"
                    />
                  </Grid>
                  <Grid item xs></Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <CardMedia
                      style={{ borderRadius: "50%" }}
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="About"
                    />
                  </Grid>
                  <Grid item xs></Grid>
                  <Grid item xs></Grid>
                </Grid>
              </Card>
            </Grid>
          </Hidden>

          {/* <Grid item spacing={2} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <Hidden smDown>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="About1"
                />
              </Hidden>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="About2"
              />
            </Card>
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
};

About.propTypes = {};

export default About;
