import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchange-service.js';
import { currencyLibrary } from './currency-library.js';

function createCurrencySelectBox() {
  let idToAppend = $("#currency");
  let htmlForSelectBox = `<option value="" selected disabled>Please select a currency</option>`;
  currencyLibrary.currencies.forEach((currency) => {
    let currencyCode = currency.currencyCode;
    let currencyDescription = `${currency.currencyName}, ${currency.country}`;
    htmlForSelectBox += `<option value="${currencyCode}">${currencyDescription}</option>`;
  });
  idToAppend.append(htmlForSelectBox);
}

function clearFields() {
  $('#amountToConvert').val("");
  $('#currency').val("");
  $('#showErrors').text("");
  $('#showConversion').text("");
}

const dynamicResponseOutput = (response, conversionCurrency, amount) => {
  const rate = response.conversion_rates[conversionCurrency];
  const time = new Date(response.time_last_update_unix * 1000).toLocaleString();
  let currencyToOutput = "";
  currencyLibrary.currencies.forEach((currency) => {
    if (currency.currencyCode === conversionCurrency) {
      currencyToOutput = currency.currencyName;
    } else {
      return;
    }
  });
  const outputDiv = $('#showConversion');
  let htmlForOutput = `As of ${time}, ${amount} U.S. Dollars is worth ${amount * rate} ${currencyToOutput}.`;
  outputDiv.html(htmlForOutput);
};

const dynamicErrorOutput = (error) => {
  const errorDiv = $('#showErrors');
  console.log(error["error-type"]);
  let htmlForErrorOutput = "";
  if (error["error-type"] === "unsupported-code") {
    htmlForErrorOutput += `There was an error processing your request. The Exchange Rate Application Programming Interface, from which we get exchange rates, doesn't support that currency. Here's the exact error message from the API: "${error["error-type"]}"</p>`;
  } else {
    htmlForErrorOutput += `Apologies. There was a technical error on our end and we're not able to access that exchange rate at this time. Here's the exact error message from the API: "${error["error-type"]}"</p>`;
  }
  errorDiv.html(htmlForErrorOutput);
};

createCurrencySelectBox();  
$('#userInput').submit(function() {
  event.preventDefault();
  const conversionCurrency = $('#currency').val();
  const amtToConvert = parseInt($('#amountToConvert').val());
  clearFields();
  let promise = ExchangeService.getExchangeRate();
  promise.then(function(response) {
    const apiResponse = JSON.parse(response);
    dynamicResponseOutput(apiResponse, conversionCurrency, amtToConvert);
  }, function(error) {
    const apiError = JSON. parse(error);
    dynamicErrorOutput(apiError);
  });
});