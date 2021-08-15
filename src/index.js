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

const dynamicOutput = (response, conversionCurrency, amount) => {
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