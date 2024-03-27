import React from "react";
import MealPlannerForm from "../Components/MealPlannerForm";
import { makeStyles } from "tss-react/mui";
import Background from "../assets/Background.jpg";
const useStyles = makeStyles()({
  wrapper: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `linear-gradient(to top, #1b4332, transparent, #1b4332)`,
  },
});
const HomePage = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.overlay}>
        <MealPlannerForm />
      </div>
    </div>
  );
};

export default HomePage;
