const amountInput = document.querySelector("#amountInput");
const firstCurrencySelect = document.querySelector("#firstCurrencySelect");
const secondCurrencySelect = document.querySelector("#secondCurrencySelect");
const resultInput = document.querySelector("#resultInput");

const currencyConverter = new CurrencyConverter();

runEventListeners();

function runEventListeners() {
  amountInput.addEventListener("input", exchange);
}

function exchange() {
  const amount = Number(amountInput.value.trim());
  const firstCurrency = firstCurrencySelect.value;
  const secondCurrency = secondCurrencySelect.value;

  currencyConverter
    .exchange(amount, firstCurrency, secondCurrency)
    .then((result) => {
      resultInput.value = result.toFixed(3);
    });
}
