import {
  REQUEST_CURRENCIES, RECEIVE_CURRENCIES
} from '../actions/portfolio'

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: []
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
    default:
      return state
  }
}

