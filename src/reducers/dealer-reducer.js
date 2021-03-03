import * as c from './../actions/ActionTypes';

const defaultState = {
  isLoading: false,
  dealer: {},
  error: null
}

const dealerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case c.REQUEST_DEALER:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_DEALER_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        dealer: action.dealer
      });
    case c.GET_DEALER_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
    }
};

export default dealerReducer;