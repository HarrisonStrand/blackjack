import draw2cardsReducer from './../../reducers/card-draw-reducer';
import * as c from './../../actions/ActionTypes'

describe('draw2cardsReducer', () => {

  let action;

  const defaultState = {
    isLoading: false,
    draw2cards: {},
    error: null
  };

  const loadingState = {
    isLoading: true,
    draw2cards: {},
    error: null
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(draw2cardsReducer(defaultState, {type: null })).toEqual(
      {
        isLoading: false,
        draw2cards: {},
        error: null
      }
    );
  });

  test('requesting draw2cards should successfully change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_DRAW2CARDS
    };

    expect(draw2cardsReducer(defaultState, action)).toEqual({
        isLoading: true,
        draw2cards: {},
        error: null
    });
  });

  test('successfully getting draw2cards should change isLoading to false and update draw2cards', () => {
    const draw2cards = "A draw2cards";
    action = {
      type: c.GET_DRAW2CARDS_SUCCESS,
      draw2cards
    };

    expect(draw2cardsReducer(loadingState, action)).toEqual({
        isLoading: false,
        draw2cards: {},
        error: null
    });
  });

  test('failing to get draw2cards should change isLoading to false and add an error message', () => {
    const error = "An error";
    action = {
      type: c.GET_DRAW2CARDS_FAILURE,
      error
    };

    expect(draw2cardsReducer(loadingState, action)).toEqual({
        isLoading: false,
        draw2cards: {},
        error: "An error"
    });
  });
});