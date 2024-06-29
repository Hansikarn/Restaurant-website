import React from "react";
import { Fragment } from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-img"]}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/400/264/non_2x/table-scene-with-a-selection-of-delicious-foods-top-view-over-a-dark-wood-banner-background-generate-ai-free-photo.jpg"
          alt="Table of food"
        />
      </div>
    </Fragment>
  );
};

export default Header;
