import * as c from './../actions/ActionTypes';

const defaultState = {
  isLoading: false,
  draw2Cards: {},
  error: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case c.REQUEST_DRAW2CARDS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_DRAW2CARDS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        draw2Cards: action.draw2Cards
      });
    case c.GET_DRAW2CARDS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
    }
};