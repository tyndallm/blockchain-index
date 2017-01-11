import {
  REQUEST_CURRENCIES, RECEIVE_CURRENCIES,
  REQUEST_CHART_DATA, RECEIVE_CHART_DATA
} from '../actions/portfolio'

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
  chartData: []
}

export default function portfolio(state = {}, action) {
  switch (action.type) {
    case REQUEST_CURRENCIES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_CURRENCIES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.items,
        lastUpdated: action.receivedAt
      })
    case REQUEST_CHART_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_CHART_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        chartData: action.data,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

