import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../ui/button";
import styles from "./jokes-search-category.module.css";

const JokesSearchCategory = ({ onSearch, onSelect }) => {
  const [isShowCategories, setIsShowCategories] = useState(false);
  const categoryInputRef = useRef();
  const categoryListRef = useRef();
  const categoryList = [
    "Animal",
    "Career",
    "Celebrity",
    "Dev",
    "Explicit",
    "Fashion",
  ];

  useEffect(() => {
    document.addEventListener("click", outsideClickHandler);
    return () => document.removeEventListener("click", outsideClickHandler);
  }, []);

  function outsideClickHandler({ target }) {
    if (categoryInputRef.current?.contains(target)) return;
    if (!categoryListRef.current?.contains(target)) {
      setIsShowCategories(false);
    }
  }

  function toggleShowCategories() {
    setIsShowCategories(!isShowCategories);
  }

  function categoryCickHandler(event) {
    const selectedCategory = event.target.textContent;
    categoryInputRef.current.value = selectedCategory;
    onSelect(selectedCategory.toLowerCase());
    setIsShowCategories(false);
  }

  function submitFormHandler(event) {
    event.preventDefault();
    const selectedCategory = categoryInputRef.current.value.toLowerCase();
    if (selectedCategory) {
      onSearch(selectedCategory);
    }
  }

  return (
    <form className={`form ${styles.form}`} onSubmit={submitFormHandler}>
      <div className={`input-field ${styles["input-field"]}`}>
        <input
          type="text"
          placeholder="Search jokes by category"
          readOnly
          className={styles.input}
          ref={categoryInputRef}
          onClick={toggleShowCategories}
        />
        <IoIosArrowDown className={styles.icon} />
        {isShowCategories && (
          <ul className={styles["category-list"]} ref={categoryListRef}>
            {categoryList.map((category, idx) => (
              <li
                key={idx}
                className={styles["category-item"]}
                onClick={categoryCickHandler}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Button width="91px" height="inherit">
        Search
      </Button>
    </form>
  );
};

export default React.memo(JokesSearchCategory);
