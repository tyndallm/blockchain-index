import fetch from 'isomorphic-fetch';

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const REQUEST_CHART_DATA = 'REQUEST_CHART_DATA';
export const RECEIVE_CHART_DATA = 'RECEIVE_CHART_DATA';

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
    items: mapToUserHoldings(user.holdings, json),
    receivedAt: Date.now()
  }
}

export function requestChartData(user) {
  return {
    type: REQUEST_CHART_DATA,
    user
  }
}

export function receiveChartData(user, json) {
  return {
    type: RECEIVE_CHART_DATA,
    user,
    data: json,
    receivedAt: Date.now()
  }
}

function mapToUserHoldings(userHoldings, currentValues) {
  let valuationObjects = [];
  currentValues.forEach(function (currency) {
    userHoldings.forEach(function (userHolding) {
      if (userHolding.symbol === currency.symbol) {
        valuationObjects.push(createHoldingsValuationObject(userHolding, currency));
      }
    });
  });
  return valuationObjects;
}

function createHoldingsValuationObject(holding, valuation) {
  let holdingValuation = holding;
  holdingValuation.name = valuation.name;
  holdingValuation.unit_price_usd = valuation.price_usd;
  holdingValuation.unit_price_btc = valuation.price_btc;
  holdingValuation.current_total_usd = holding.units * valuation.price_usd;
  holdingValuation.current_total_btc = holding.units * valuation.price_btc;
  return holdingValuation;
}

function fetchCurrencies(user) {
  return dispatch => {
    dispatch(requestCurrencies(user))
    return fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=100`)
      .then(response => response.json())
      .then(json => dispatch(receiveCurrencies(user, json)))
  }
}

function fetchChartData(user) {
  return dispatch => {
    dispatch(requestChartData(user))
    return fetch(`http://localhost:8080/api/cryptos`)
      .then(response => response.json())
      .then(json => dispatch(receiveChartData(user, json)))
  }
}

export function fetchCurrenciesIfNeeded(user) {
  return (dispatch, getState) => {
    return dispatch(fetchCurrencies(user));
  }
}

export function fetchChartDataIfNeeded(user) {
  return (dispatch, getState) => {
    return dispatch(fetchChartData(user));
  }
}

