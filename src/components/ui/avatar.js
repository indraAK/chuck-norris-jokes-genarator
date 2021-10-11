import styles from "./avatar.module.css";

const Avatar = () => {
  return (
    <img
      src="/images/chuck-norris.svg"
      className={styles.avatar}
      alt="Chuck Norris Icon"
    />
  );
};

export default Avatar;
