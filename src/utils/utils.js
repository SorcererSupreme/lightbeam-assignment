export const formatNumber = (num, decimalPlaces = 2) => {
  let formattedNumber = "-";

  if (!isNaN(num)) {
    formattedNumber = parseFloat(num).toFixed(decimalPlaces);
  }

  return formattedNumber;
};
