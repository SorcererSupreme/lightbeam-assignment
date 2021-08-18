import React from "react";
import styles from "./SearchInput.module.css";

const SearchInput = ({ handleSearch }) => {
  return (
    <div className={styles.root}>
      <i className={`fas fa-search ${styles.icon}`}></i>
      <input
        type="text"
        placeholder="Search"
        className={styles.input}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchInput;
