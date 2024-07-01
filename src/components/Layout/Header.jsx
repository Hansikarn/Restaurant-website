import React from "react";
import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCart";
import MealSummary from "../Meals/MealSummary";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-img"]}>
        <img
          src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true"
          alt="Table of food"
        />
        <MealSummary />
      </div>
    </Fragment>
  );
};

export default Header;
