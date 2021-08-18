import React from "react";
import CryptoCard from "./CryptoCard";
import styles from "./RightPanel.module.css";

const RightPanel = ({ activeCrypto }) => {
  return (
    <div className={styles.root}>
      <span className={styles.heading}>My Cryptos</span>
      <div className={styles.cardsContainer}>
        <CryptoCard activeCrypto={activeCrypto} />
      </div>
    </div>
  );
};

export default RightPanel;
