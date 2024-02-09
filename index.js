let input_amount_tag = document.getElementById("amount-input");
let fromCurrency_tag = document.getElementById("from-currency-names");
let toCurrency_tag = document.getElementById("to-currency-names");
let convertButton = document.getElementById("convert-button");
let resetButton = document.getElementById("reset-button");
let answerAmountTag = document.getElementById("answer-amount-tag");
convertButton.addEventListener("click", () => {
  let amount = input_amount_tag.value;
  let fromCurrency = fromCurrency_tag.value;
  let toCurrency = toCurrency_tag.value;
  let ans = convertCurrency(amount, fromCurrency, toCurrency);
  answerAmountTag.innerText = `Converted Amount-: ${ans}`;
  answerAmountTag.style.opacity = "1";
});
resetButton.addEventListener("click", () => {
  reset();
});
function reset() {
  // fromCurrency_tag / select_tag is the select element
  var fromCurrency_tag = document.getElementById("from-currency-names");

  // Clear the input field
  input_amount_tag.value = "";

  // Get the selected option
  // let selectedOption = fromCurrency_tag.options[fromCurrency_tag.selectedIndex];

  // Set the selected index to 0 to select the first option
  fromCurrency_tag.selectedIndex = 0;
  toCurrency_tag.selectedIndex = 0;

  answerAmountTag.style.opacity = "0";
}

const exchangeRates = {
  usd: 1.0, // 1 USD to EUR
  eur: 0.85, // 1 EUR to USD
  gbp: 0.73, // 1 GBP to USD
  jpy: 109.92, // 1 JPY to USD
  aud: 1.58, // 1 AUD to USD
  cad: 1.25, // 1 CAD to USD
  chf: 1.08, // 1 CHF to USD
  cny: 6.45, // 1 CNY to USD
  inr: 73.07, // 1 INR to USD
  brl: 5.33, // 1 BRL to USD
  mxn: 20.08, // 1 MXN to USD
  sek: 8.44, // 1 SEK to USD
  sgd: 1.57, // 1 SGD to USD
  nzd: 1.68, // 1 NZD to USD
  hkd: 7.78, // 1 HKD to USD
  npr: 118.86, // 1 NPR to USD
  lkr: 202.56, // 1 LKR to USD
  bdt: 85.61, // 1 BDT to USD
  pkr: 303.0, // 1 PKR to USD
  afn: 86.4, // 1 AFN to USD
};

function convertCurrency(amount, fromCurrency, toCurrency) {
  if (!(fromCurrency in exchangeRates) || !(toCurrency in exchangeRates)) {
    window.alert("Invalid currency code.");
    reset();
  }

  const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
  const convertedAmount = amount * rate;
  return convertedAmount.toFixed(2); // Limit to two decimal places
}
