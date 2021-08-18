import React from "react";
import { formatNumber } from "../utils/utils";
import styles from "./CryptoCard.module.css";

const CryptoCard = ({ activeCrypto }) => {
  const img = activeCrypto["token_img"];
  const name = activeCrypto["token"];
  const symbol = activeCrypto["symbol"];
  const buyQuote = formatNumber(activeCrypto["quotes"]["buy"]);
  const sellQuote = formatNumber(activeCrypto["quotes"]["sell"]);
  const absoluteChange = formatNumber(activeCrypto["quotes"]["change_abs"]);
  const percentChange = `${formatNumber(
    activeCrypto["quotes"]["change_percent"]
  )}%`;

  const setClassName = () => {
    let className = styles.success;

    if (absoluteChange < 0) {
      className = styles.failure;
    }
    return className;
  };

  const renderChangeElement = () => {
    return (
      <div className={`${styles.change} ${setClassName()}`}>
        <span className={styles.absoluteChange}>{absoluteChange}</span>

        <span className={styles.percentChange}>{`(${percentChange})`}</span>
        {absoluteChange < 0 ? (
          <i className="fas fa-caret-down"></i>
        ) : (
          <i className="fas fa-caret-up"></i>
        )}
      </div>
    );
  };

  return (
    <div className={styles.root}>
      <div className={styles.avatar}>
        <img src={img} className={styles.img} />
      </div>
      <div className={styles.infoBox}>
        <span className={styles.name}>{name}</span>
        <span className={styles.symbol}>{symbol}</span>
        {renderChangeElement()}
        <span className={styles.changeDescriptor}>change</span>
        <div className={styles.quotationBox}>
          <div className={styles.buyBox}>
            <span className={styles.quote}>{buyQuote}</span>
            <span className={styles.quoteDescriptor}>buy</span>
          </div>
          <div className={styles.sellBox}>
            <span className={styles.quote}>{sellQuote}</span>
            <span className={styles.quoteDescriptor}>sell</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
