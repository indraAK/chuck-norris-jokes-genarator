import styles from "./joke-item.module.css";

const JokeItem = ({ joke, style }) => {
  return (
    <p className={styles.jokes} style={style}>
      " {joke.value} "
    </p>
  );
};

export default JokeItem;
