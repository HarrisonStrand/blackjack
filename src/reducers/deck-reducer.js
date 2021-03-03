import * as c from './../actions/ActionTypes';

const defaultState = {
  isLoading: false,
  deck: {},
  error: null
}

const deckReducer = (state = defaultState, action) => {
  switch (action.type) {
    case c.REQUEST_DECK:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_DECK_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        deck: action.deck
      });
    case c.GET_DECK_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
    }
};

export default deckReducer;