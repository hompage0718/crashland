import React from "react";

import {
  Typography,
  Paper,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Grid,
  Container,
} from "@material-ui/core";

import useStyles from "../../styles";

const ContactUs = (props) => {
  const classes = useStyles();

  return (
    <>
      <Paper elevation={2}>
        <Container maxWidth="lg" className={classes.containerheader}>
          <Typography
            variant="h3"
            align="left"
            color="textPrimary"
            // gutterBottom
          >
            Contact Us
          </Typography>
        </Container>
      </Paper>
      <body>
        <Container maxWidth="md" className={classes.containerheader}>
          <Grid item md={12} className={classes.pagetopbutton}>
            <Grid item>
              <Typography
                variant="h6"
                align="left"
                color="textPrimary"
                // gutterBottom
              >
                We'd like to hear from you.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="md" className={classes.containerheader}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={6}>
              <form className={classes.form}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="subject"
                  label="Subject"
                  name="subject"
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="message"
                  label="Message"
                  name="message"
                  multiline
                  rows={5}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Send
                </Button>
              </form>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6">Heading</Typography>
                  <Typography variant="body2">
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image Title"
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </body>
    </>
  );
};

ContactUs.propTypes = {};

export default ContactUs;
