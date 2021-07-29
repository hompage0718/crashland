import React from "react";

import {
  Typography,
  Paper,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import useStyles from "../../styles";

const ContactUs = (props) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const jobList = [
    {
      position: "IT Support",
      location: "Tokyo, Japan",
      company: "Yamato",
      jobdescr:
        "Workday Financial Consultants ensure successful deployments by architecting, configuring, and testing the Workday solution to meet the specific needs of our customers. ",
      postdt: "Aug 2021",
    },
    {
      position: "Welding",
      location: "Saitama, Japan",
      company: "Sekisui",
      jobdescr:
        "Understand Workday’s Implementation Methodology and use it on all engagements",
      postdt: "Jun 2021",
    },
    {
      position: "Construction",
      location: "Gunma, Japan",
      company: "Grandee",
      jobdescr:
        "Currently, we prefer to hire a Senior level Consultant - however this role could be filled at a lower level if the ideal candidate does not have the experience of a Senior level.",
      postdt: "Jul 2021",
    },
  ];

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
            Jobs
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
                Find the right job for you.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="md" className={classes.containerheader}>
          <Grid container spacing={1}>
            {jobList.map((job, index) => (
              <Grid key={index} item xs={12}>
                <Accordion
                  expanded={expanded === index}
                  onChange={handleChange(index)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.jobHeading}>
                      {job.position}
                    </Typography>
                    <Typography className={classes.jobSecondaryHeading}>
                      {job.location}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Card className={classes.jobCard}>
                      <CardContent className={classes.jobCardContent}>
                        <Typography variant="body2">{job.jobdescr}</Typography>
                        <Typography variant="body">
                          <br />
                          Posted date: {job.postdt}
                        </Typography>
                      </CardContent>
                    </Card>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Container>
      </body>
    </>
  );
};

ContactUs.propTypes = {};

export default ContactUs;
