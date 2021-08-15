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
