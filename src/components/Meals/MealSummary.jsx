import classes from "./MealSummary.module.css";

const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h1> Delicious Food Delivered</h1>
      <p>
        Discover a unique blend of global cuisines at Modern Fusion Lounge,
        where innovation meets tradition. Our menu offers an eclectic mix of
        flavors, combining elements of Asian, Mediterranean, and Latin American
        culinary traditions.
      </p>
      <p>
        Enjoy small plates perfect for sharing, alongside signature cocktails
        and an extensive wine list. The chic, contemporary atmosphere is ideal
        for a night out with friends or a sophisticated date night.
      </p>
    </section>
  );
};

export default MealSummary;
