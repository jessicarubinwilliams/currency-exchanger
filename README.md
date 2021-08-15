# _Currency Exchanger_

#### _A web-based application to convert an amount in U.S. dollars to the currency of the user's choice._

#### _By **Jessica R. Williams**_

#### _Table of Contents_

1. [Preview](#preview)
2. [Technologies Used](#technologies)
3. [Description](#description)
4. [The Assignment Prompt](#prompt)
5. [API Key Procurement](#api)
6. [Setup/Installation Requirements](#setup)
7. [Additional Setup/Installation Note for Windows Users](#windows)
8. [Specifications](#specs)
9. [Known Bugs](#bugs)
10. [License](#license)
11. [Contact Information](#contact)

## Preview <a id="preview"></a>

_Direct your browser to a [live version](https://jessicarubinwilliams.github.io/currency-exchanger) on GitHub Pages._

## Technologies Used <a id="technologies"></a>

* _Babel/core 7.6.4_
* _Babel/plugin-transform-modules-commonjs 7.6.0_
* _Bootstrap 4.5.0_
* _clean-webpack-plugin 3.0.0_
* _CSS_
* _css-loader 3.2.0_
* _dotenv-webpack@2.0.0_
* _eslint 6.3.0_
* _eslint-loader 3.0.0_
* _file-loader 1.1.6_
* _HTML5_
* _html-loader 0.5.5_
* _html-webpack-plugin 3.2.0_
* _JavaScript ES6_
* _Jest 24.9.0_
* _jQuery 3.5.1_
* _Node Package Manager 6.14.9_
* _popper.js 1.16.1_
* _style-loader 1.0.0_
* _webpack 4.39.3_
* _webpack-cli 3.3.8_
* _webpack-dev-server 3.11.2_

## Description <a id="description"></a>

_This is a web-based application to convert U.S. Dollars to the currency of the user's choice. The user enters an amount of U.S. currency and then selects a currency to convert to from a drop down box of the 160 commonly circulating world currencies. Once the user clicks the submit button the application interacts with the ExchangeRate-API to get the current days exchange rate. If the API call is successful the application displays the converted amount. If the API call is not successful the application displays the error message from the API._

## The Assignment Prompt <a id="prompt"></a>

_A user should be able to type in an amount (in U.S. dollars) and then choose which currency it should be converted to (such as francs, marks, rupees, and so on)._

* _A user should be able to enter an amount (in U.S. dollars) and then specify another currency (such as the South Korean won). The user should then see the total amount they entered in converted currency._
* _Users should be able to convert U.S. currency into at least 5 other types of currency._
* _If the API call results in an error (any message not a 200 OK), the application should return a notification to the user that states what the error is._
* _If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist._

## API Key Procurement <a id="api"></a>

_This application uses the ExchangeRate-API. You will need to make an account and get an API key if you wish to recreate the project environment on your local. The "Free Plan" allows for 2000 API calls per month.

* _Visit the [ExchangeRate-API site](https://www.exchangerate-api.com/)._
* _Input your email address and click the "Get Free Key" button._
* _You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use, click "Get Started!" and confirm your email address._
* _Access your account dashboard that includes your API key as well as your remaining API calls for the month._

## Setup/Installation Requirements <a id="setup"></a>

* _Open the terminal on your local machine_
* _If [Node.js](https://nodejs.org/en/) and [Nope Package Manager (npm)](https://www.npmjs.com/) are not installed on your local device, follow the instructions [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript/installing-node-js)_
* _Navigate to the directory inside of which you wish to house this project_
* _Clone this project with the following git command `$ git clone <https://github.com/jessicarubinwilliams/project>`_
* _Navigate to the top level of the repository with the command `$ cd project`_
* _Recreate project environment and install required dependencies with terminal command `$ npm install`_
* _Create file for storing environmental variables you want to keep secret (such as an API key)`$ touch .env`_
* _Open the project in your text editor_
* _Add the following line of code to the .env file `API_KEY=insert-your-API-key-here` where you substitute the API key you got by following the instructions above for the "insert-your-API-key-here". The following is an example using a fake API key: `API_KEY=1234567890`
* _Create production environment with terminal command `$ npm run build`_
* _Open project in a development server in the browser of your choice with the command `$ npm run start`_
* _Lint code with the command `$ npm run lint`_
* _Run tests in Jest with the command `$ npm test`_

## Additional Setup/Installation Note for Windows Users <a id="windows"></a>

_This environment was created on a Mac. For it to work properly in your local environment make the following change:_
* _Update package.json, line 8 to: `"start": "npm run build & webpack-dev-server --open --mode development",`_

## Specifications <a id="specs"></a>

| Behavior | Input | Output |
|:---:|:---:|:---:|
| The program should handle... | When it receives... | It should return... |

## Known Bugs <a id="bugs"></a>
* _There are no validation checks on the user's input_
* _There is inelegant error handling. The error message should be better parsed before display_

## License <a id="license"></a>
*[MIT](https://choosealicense.com/licenses/mit/)*

Copyright (c) **_2021 Jessica R. Williams_**

## Contact Information <a id="contact"></a>
**_Jessica R. Williams [mailto](mailto:jessicarubinwilliams@gmail.com)_**