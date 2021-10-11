import React, { useRef } from "react";
import Button from "../ui/button";
import styles from "./jokes-search-text.module.css";

const JokesSearchText = ({ onSearch }) => {
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    const enteredText = textInputRef.current.value.trim();
    if (enteredText) {
      onSearch(enteredText);
    }
  }

  return (
    <form className={`form ${styles.form}`} onSubmit={submitFormHandler}>
      <div className={`input-field ${styles["input-field"]}`}>
        <input
          type="text"
          placeholder="Search jokes by text"
          className={`input ${styles.inpu}`}
          ref={textInputRef}
        />
      </div>
      <Button width="91px" height="inherit">
        Search
      </Button>
    </form>
  );
};

export default React.memo(JokesSearchText);
