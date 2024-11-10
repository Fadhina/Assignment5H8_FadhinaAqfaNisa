import React from "react";

const CurrencyRateCard = ({ currencyRate }) => {
  if (!currencyRate || !currencyRate.rates) return null;

  // List of currencies to display
  const selectedCurrencies = ["CAD", "IDR", "JPY", "CHF", "EUR", "GBP"];

  // Prepare data for selected currencies
  const currencyData = selectedCurrencies.map((currency) => {
    const exchangeRate = parseFloat(currencyRate.rates[currency]);
    const weBuy = (exchangeRate * 1.05).toFixed(4); // 5% higher
    const weSell = (exchangeRate * 0.95).toFixed(4); // 5% lower
    return { currency, weBuy, exchangeRate: exchangeRate.toFixed(4), weSell };
  });

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="overflow-hidden border border-gray-200 shadow-sm rounded-xl dark:border-neutral-800">
        <table className="min-w-full bg-white dark:bg-neutral-900">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-neutral-400">
                Currency
              </th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-neutral-400">
                We Buy
              </th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-neutral-400">
                Exchange Rate
              </th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-neutral-400">
                We Sell
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-800">
            {currencyData.map((data) => (
              <tr key={data.currency}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                  {data.currency}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-400">
                  {data.weBuy}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-400">
                  {data.exchangeRate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-neutral-400">
                  {data.weSell}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrencyRateCard;
