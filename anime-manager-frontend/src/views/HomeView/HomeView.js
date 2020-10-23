import React from "react";
import Logo from "../../components/utilityComponents/Logo";
import { makeStyles, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSnackbar } from "../../custom-hooks/snackbarHook";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import Slider1 from "../../assets/slider1.jpg";
import Slider2 from "../../assets/slider2.png";
import Slider3 from "../../assets/slider3.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const useStyles = makeStyles((theme) => ({
  fullPageContainer1: {
    backgroundImage: `url(${Slider1})`,
    height: "100vh",
    width: "100vw",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  fullPageContainer2: {
    backgroundImage: `url(${Slider2})`,
    height: "100vh",
    width: "100vw",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  fullPageContainer3: {
    backgroundImage: `url(${Slider3})`,
    height: "100vh",
    width: "100vw",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  slideContent: {
    width: "100%",
    height: "75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0 1rem",
  },
  slideText: {
    color: "#fff",
    fontSize: "1.2rem",
    textAlign: "center",
  },
  slideHeader: {
    fontSize: "3rem",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    background: `${theme.palette.primary.main}`,
    border: `1px solid ${theme.palette.primary.main}`,
    color: `${theme.palette.secondary.main}`,
    fontSize: "0.8rem",
    margin: "1rem",
    fontWeight: "bold",
    padding: "7px 25px",
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main}`,
    },
    borderRadius: theme.typography.pxToRem(15),
  },
  registerButton: {
    color: `${theme.palette.secondary.main}`,
    fontSize: "0.8rem",
    background: "rgba(0, 0, 0, 0.2)",
    margin: "1rem",
    fontWeight: "bold",
    padding: "7px 25px",
    border: `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main}`,
      background: `${theme.palette.primary.main}`,
    },
    borderRadius: theme.typography.pxToRem(15),
  },
  linkStyle: {
    textDecoration: "none",
  },
}));

const SlideContent = (props) => {
  const { classes } = props;
  return (
    <div className={classes.slideContent}>
      <Typography className={classes.slideText}>
        <span className={classes.slideHeader}>Anime Manager</span> <br /> One
        place to manage all your favourite animes.
      </Typography>
      <div className={classes.buttonContainer}>
        <Link
          to={{ pathname: "/auth", state: { login: true } }}
          className={classes.linkStyle}
        >
          <Button className={classes.loginButton}>Login</Button>
        </Link>
        <Link
          to={{ pathname: "/auth", state: { login: false } }}
          className={classes.linkStyle}
        >
          <Button className={classes.registerButton}>Sign Up</Button>
        </Link>
      </div>
    </div>
  );
};

const FirstSlide = (props) => {
  const { classes } = props;
  return (
    <div className={classes.fullPageContainer1}>
      <Logo />
      <SlideContent {...props} />
    </div>
  );
};

const SecondSlide = (props) => {
  const { classes } = props;
  return (
    <div className={classes.fullPageContainer2}>
      <Logo />
      <SlideContent {...props} />
    </div>
  );
};

const ThirdSlide = (props) => {
  const { classes } = props;
  return (
    <div className={classes.fullPageContainer3}>
      <Logo />
      <SlideContent {...props} />
    </div>
  );
};

const Home = (props) => {
  const classes = useStyles();
  useSnackbar();
  return (
    <AutoplaySlider
      fillParent
      bullets={false}
      organicArrows={false}
      play
      interval={6000}
      animation="fallAnimation"
    >
      <div>
        <FirstSlide classes={classes} />
      </div>
      <div>
        <SecondSlide classes={classes} />
      </div>
      <div>
        <ThirdSlide classes={classes} />
      </div>
    </AutoplaySlider>
  );
};

export default Home;