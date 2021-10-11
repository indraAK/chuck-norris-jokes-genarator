import styles from "./results-title.module.css";

const ResultsTitle = ({ title, value }) => {
  return (
    <div className={styles.text}>
      <h2 className={styles.title}>
        {title}: <span>{value}</span>
      </h2>
    </div>
  );
};

export default ResultsTitle;
