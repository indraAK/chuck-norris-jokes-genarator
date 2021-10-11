import styles from "./button.module.css";

const Button = ({ width, height, onClick, children }) => {
  if (onClick) {
    return (
      <button
        style={{ width, height }}
        className={styles.button}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <button style={{ width, height }} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
