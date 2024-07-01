import classes from "./HeaderCart.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <img
        className={classes.icon}
        src="https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg"
        alt="Cart"
      />

      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
