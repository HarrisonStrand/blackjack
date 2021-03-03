import * as c from './../actions/ActionTypes';

const defaultState = {
  isLoading: false,
  hit: [],
  error: null
}

const HitReducer = (state = [], action) => {
  switch (action.type) {
    case c.REQUEST_HIT:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_HIT_SUCCESS:
      const arrayOfOneCardObject = action.Hit;
      console.log(arrayOfOneCardObject);
      return {
        ...state,
        ...arrayOfOneCardObject
      }
    case c.GET_HIT_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
    }
};

export default HitReducer;