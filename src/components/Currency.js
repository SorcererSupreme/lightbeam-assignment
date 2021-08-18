import React from "react";
import styles from "./Currency.module.css";

const Currency = ({ crypto, handleClick, active = false }) => {
  const id = crypto["id"];
  const img = crypto["token_img"];
  const name = crypto["token"];
  const symbol = crypto["symbol"];

  return (
    <div
      className={`${styles.root} ${active && styles.active}`}
      onClick={() => handleClick(id)}
    >
      <div className={styles.leftPanel}>
        <img src={img} className={styles.img} />
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.currency}>{symbol}</div>
        <span className={styles.symbol}>{name}</span>
      </div>
    </div>
  );
};

export default Currency;
