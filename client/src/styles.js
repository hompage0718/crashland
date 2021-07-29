import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3, 0, 2),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 3),
    flexGrow: 1,
  },
  containerheader: {
    backgroundColor: "theme.palette.background.paper",
    padding: theme.spacing(4, 2, 3),
    flexGrow: 1,
  },
  containeraddon: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 3),
    flexGrow: 1,
  },
  cardMedia: {
    flexGrow: 1,
    // paddingTop: "42.85%", //21:9
    paddingTop: "56.25%", // 16:9,
    borderRadius: "5%",
  },
  cardMediaTopic: {
    flexGrow: 1,
    paddingTop: "56.25%", // 16:9,
    borderRadius: "50%",
  },
  cardGrid: {
    padding: "20px 5px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    border: "none",
    boxShadow: "none",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMediaCircle: {
    // paddingTop: "42.85%", //21:9
    paddingTop: "56.25%", // 16:9,
    borderRadius: "75%",
  },
  pagetopbutton: {
    // flexGrow: 1,
    // padding: theme.spacing(1),
    textAlign: "center",
  },
  contentcenter: {
    // flexGrow: 1,
    // padding: theme.spacing(1),
    textAlign: "center",
  },

  //Carousel
  containerCarousel: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1, 2, 1),
    flexGrow: 1,
  },
  carousel: {
    width: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "350px",
    },
    [theme.breakpoints.up("md")]: {
      height: "550px",
    },
  },
  carouselTextone: {
    position: "absolute",
    top: "150px",
    color: "#fff",
    left: "10%",
    // textShadow: "0 0 1px white, 0 0 1px white, 0 0 1px white, 0 0 1px white",
    zIndex: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "4rem",
    },
  },
  carouselTexttwo: {
    position: "absolute",
    top: "250px",
    color: "#fff",
    left: "10%",
    // textShadow: "0 0 1px white, 0 0 1px white, 0 0 1px white, 0 0 1px white",
    zIndex: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
    },
  },

  //About Us
  containerAbout: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 3),
    flexGrow: 1,
  },
  aboutusText: {
    margin: "5% 10%",
  },
  btnAboutUs: {
    [theme.breakpoints.down("sm")]: {
      padding: "5px 5px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "5px 50px",
    },
  },
  aboutText: {
    textAlign: "center",
    padding: "10px 10px",
  },
  largeIcon: {
    width: 60,
    height: 60,
  },

  //Services
  containerServices: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(4, 0, 3),
    flexGrow: 1,
  },
  serviceGrid: {
    flexGrow: 1,
    textAlign: "center",
    padding: "20px 10px",
  },
  serviceIcon: {
    width: 60,
    height: 60,
  },

  //Contact Main page
  containerContactMain: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(4, 0, 3),
    flexGrow: 1,
  },
  contactGrid: {
    textAlign: "center",
    padding: "10px 10px",
  },
  contactButton: {
    borderRadius: "10%",
    color: "white",
    margin: "5px",
  },
  contactDivider: {
    background: "lightBlue",
    height: "5px",
  },

  //Gallery
  galleryRoot: {
    paddingTop: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  galleryImageList: {
    width: "auto",
    height: 450,
  },

  //Contact Us
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  //Topics
  topicRoot: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    paddingTop: "20px",
  },
  topicImageList: {
    width: "240",
    height: "225",
    borderRadius: "5%",
  },
  topicIcon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },

  //Testi
  testiroot: {
    paddingTop: "20px",
    width: "100%",
    maxWidth: "50ch",
    backgroundColor: theme.palette.background.paper,
    border: "1px",
  },
  testiinline: {
    display: "inline",
    textAlign: "left",
    padding: "5px",
  },
  avatarlarge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },

  contactbutton: {
    borderRadius: 35,
    backgroundColor: "#d50000",
    padding: "10px 20px",
  },

  //AddOn Explore
  addonIcon: {
    flexGrow: 1,
    textAlign: "center",
  },
  largerIcon: {
    width: 80,
    height: 80,
  },

  //Footer
  footerinfo: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  footersocial: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "right",
    },
  },
  footeralign: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
}));

export default useStyles;
