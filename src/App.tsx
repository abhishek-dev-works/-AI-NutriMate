import React from "react";
import "./App.css";
import MealPlannerForm from "./Components/MealPlannerForm";
import HomePage from "./Pages/HomePage";
import Logo from "./assets/Logo.png";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
  logo: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 200,
    backgroundImage: `url(${Logo})`,
    backgroundSize: "contain",
    width: 100,
    height: 100,
  },
  brand: {
    position: "absolute",
    top: 30,
    left: 110,
    zIndex: 200,
    color: '#fefefe',
    fontWeight: 600,
    fontStyle:'italic'
  }
});

function App() {
  const { classes } = useStyles();
  return (
    <div className="App">
      <div className={classes.logo}></div>
      <h2 className={classes.brand}>AI NutriMate</h2>
      <HomePage />
    </div>
  );
}

export default App;
