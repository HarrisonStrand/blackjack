import * as c from './ActionTypes';

export const requestTable = () => ({
  type: c.REQUEST_TABLE
});

export const getTableSuccess = (table) => ({
  type: c.GET_TABLE_SUCCESS,
  table
});

export const getTableFailure = (error) => ({
  type: c.GET_TABLE_FAILURE,
  error
});

export const createGameDeck = () => {
  return dispatch => {
    dispatch(requestTable);
    return fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getTableSuccess(jsonifiedResponse.results));
        })
      .catch((error) => {
        dispatch(getTableFailure(error));
      });
  }
}