import * as c from './../actions/ActionTypes';

const defaultState = {
  isLoading: false,
  table: [],
  error: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case c.REQUEST_TABLE:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_TABLE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        table: action.table
      });
    case c.GET_TABLE_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
    }
};