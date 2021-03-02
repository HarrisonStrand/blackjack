import deckReducer from './../../reducers/deck-reducer';
import * as c from './../../actions/ActionTypes'

describe('deckReducer', () => {

  let action;

  const defaultState = {
    isLoading: false,
    deck: {},
    error: null
  };

  const loadingState = {
    isLoading: true,
    deck: {},
    error: null
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(deckReducer(defaultState, {type: null })).toEqual(
      {
        isLoading: false,
        deck: {},
        error: null
      }
    );
  });

  test('requesting deck should successfully change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_DECK
    };

    expect(deckReducer(defaultState, action)).toEqual({
        isLoading: true,
        deck: {},
        error: null
    });
  });

  test('successfully getting deck should change isLoading to false and update deck', () => {
    const deck = "A deck";
    action = {
      type: c.GET_DECK_SUCCESS,
      deck
    };

    expect(deckReducer(loadingState, action)).toEqual({
        isLoading: false,
        deck: "A deck",
        error: null
    });
  });

  test('failing to get deck should change isLoading to false and add an error message', () => {
    const error = "An error";
    action = {
      type: c.GET_DECK_FAILURE,
      error
    };

    expect(deckReducer(loadingState, action)).toEqual({
        isLoading: false,
        deck: {},
        error: "An error"
    });
  });
});