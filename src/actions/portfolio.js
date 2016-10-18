import fetch from 'isomorphic-fetch';

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';

export function requestCurrencies(user) {
  return {
    type: REQUEST_CURRENCIES,
    user
  }
}

export function receiveCurrencies(user, json) {
  return {
    type: RECEIVE_CURRENCIES,
    user,
    currencies: mapToUserCurrencies(user.currencies, json),
    receivedAt: Date.now()
  }
}

function mapToUserCurrencies(userCurrenices, fetchedCurrencies) {
  let desiredCurrencies = [];
  fetchedCurrencies.forEach(function (currency) {
    userCurrenices.forEach(function (userCurrency) {
      if (userCurrency === currency.symbol) {
        desiredCurrencies.push(currency);
      }
    });
  });
  return desiredCurrencies;
}

function fetchCurrencies(user) {
  console.log("[fetchCurrencies] ", user);
  return dispatch => {
    dispatch(requestCurrencies(user))
    return fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=100`)
      .then(response => response.json())
      .then(json => dispatch(receiveCurrencies(user, json)))
  }
}

export function fetchCurrenciesIfNeeded(user) {
  return (dispatch, getState) => {
    return dispatch(fetchCurrencies(user));
  }
}

