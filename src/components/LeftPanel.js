import React, { useState, useEffect } from "react";
import Currency from "./Currency";
import styles from "./LeftPanel.module.css";
import SearchInput from "./SearchInput";

const LeftPanel = ({ cryptos, activeCrypto, handleClick }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(cryptos);
  }, []);

  const handleSearch = (word) => {
    let bool = false;

    const searchResults = cryptos.filter((crypto) => {
      bool =
        crypto["token"].toLowerCase().includes(word.toLowerCase()) ||
        crypto["symbol"].toLowerCase().includes(word.toLowerCase());
      return bool;
    });

    setSearchResults(searchResults);
  };

  return (
    <div className={styles.root}>
      <div className={styles.topPanel}>
        <div className={styles.cryptoCount}>Cryptos (7)</div>
        <SearchInput handleSearch={handleSearch} />
      </div>
      <div className={styles.bottomPanel}>
        {searchResults.map((searchResult) => (
          <Currency
            key={`currency-${searchResult["id"]}`}
            handleClick={handleClick}
            crypto={searchResult}
            active={activeCrypto["id"] === searchResult["id"]}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftPanel;
