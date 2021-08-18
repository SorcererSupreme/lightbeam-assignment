import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import { tickerPrices } from "./db";

function App() {
  const [cryptos, setCryptos] = useState([]);
  const [activeCrypto, setActiveCrypto] = useState(tickerPrices[0]);

  useEffect(() => {
    setCryptos(tickerPrices);
  }, []);

  const handleClick = (id) => {
    const activeCrypto = cryptos.find((crypto) => crypto["id"] == id);

    setActiveCrypto(activeCrypto);
  };

  return (
    <div className={styles.root}>
      <LeftPanel
        cryptos={cryptos}
        activeCrypto={activeCrypto}
        handleClick={handleClick}
      />
      <RightPanel activeCrypto={activeCrypto} />
    </div>
  );
}

export default App;
