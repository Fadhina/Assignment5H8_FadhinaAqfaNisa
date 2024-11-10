// Fadhina Aqfa Nisa

import { useEffect, useState } from "react";
import CurrencyRateCard from "./components/CurrencyRateCard";

function App() {
  const [currencyRate, setCurrencyRate] = useState(null);

  useEffect(() => {
    const fetchCurrencyRate = async () => {
      try {
        const response = await fetch(
          "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=2c8a990bcb954fb7b7293104a46fe525"
        );
        if (response.ok) {
          const data = await response.json();
          setCurrencyRate(data);
        } else {
          console.log("Failed to fetch currency rates");
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCurrencyRate();
  }, []);

  console.log(currencyRate);

  return (
    <>
      <CurrencyRateCard currencyRate={currencyRate} />
    </>
  );
}

export default App;
