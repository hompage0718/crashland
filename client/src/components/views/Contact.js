import React from "react";
import { Link } from "react-router-dom";

import {
  Typography,
  Button,
  Grid,
  Container,
  Divider,
} from "@material-ui/core";
import { red, blue } from "@material-ui/core/colors";

import useStyles from "../../styles";

const Contact = (props) => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" className={classes.containerContactMain}>
        <Typography
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Ready to talk? <br />
          Get in touch with us.
        </Typography>
        <div className={classes.containerheader}>
          <Grid container spacing={0}>
            <Grid item xs={12} className={classes.contactGrid}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.contactButton}
              >
                <Link to="/contactus" className={classes.contactButton}>
                  Contact Us
                </Link>
              </Button>
            </Grid>
            <Grid item xs={3} className={classes.contactGrid}></Grid>
            <Grid item xs={6} className={classes.contactGrid}>
              <Divider className={classes.contactDivider} />
            </Grid>
            <Grid item xs={3} className={classes.contactGrid}></Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

Contact.propTypes = {};

export default Contact;
