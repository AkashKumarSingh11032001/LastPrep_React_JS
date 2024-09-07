// function hello(){
//     return [x,y]
// }

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [currencyInfo, setCurrencyInfo] = useState(null);
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    ) // json is in string so covert to json
      .then((res) => res.json)
      .then((data) => {
        setCurrencyInfo(data[currency]);
      });
  }, [currencyInfo]);

  return currencyInfo;
}

export default useCurrencyInfo;

//-> Explain useEffect() in lamen term or easy to understand term?
