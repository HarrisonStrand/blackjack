import * as c from './../actions/ActionTypes';

const defaultState = {
  isLoading: false,
  draw2Cards: [],
  error: null
}

const drawTwoCardsReducer = (state = [], action) => {
  switch (action.type) {
    case c.REQUEST_DRAW2CARDS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_DRAW2CARDS_SUCCESS:
      const arrayOfTwoCardObjects = action.draw2cards;
      console.log(arrayOfTwoCardObjects);
      return [
        ...state,
        ...arrayOfTwoCardObjects
      ]
    case c.GET_DRAW2CARDS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
    }
};

export default drawTwoCardsReducer;