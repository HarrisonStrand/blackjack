import * as c from './ActionTypes';

export const requestDealer = () => ({
  type: c.REQUEST_DEALER
});

export const getDealerSuccess = (dealer) => ({
  type: c.GET_DEALER_SUCCESS,
  dealer
});

export const getDealerFailure = (error) => ({
  type: c.GET_DEALER_FAILURE,
  error
});

export const requestDraw2Cards = () => ({
  type: c.REQUEST_DRAW2CARDS
});

export const getDraw2CardsSuccess = (draw2Cards) => ({
  type: c.GET_DRAW2CARDS_SUCCESS,
  draw2Cards
});

export const getDraw2CardsFailure = (error) => ({
  type: c.GET_DRAW2CARDS_FAILURE,
  error
});

export const requestDeck = () => ({
  type: c.REQUEST_DECK
});

export const getDeckSuccess = (deck) => ({
  type: c.GET_DECK_SUCCESS,
  deck
});

export const getDeckFailure = (error) => ({
  type: c.GET_DECK_FAILURE,
  error
});

export const createGameDeck = () => {
  return dispatch => {
    dispatch(requestTable);
    return fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
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

export const drawTwoCards = (deckId) => {
  return dispatch => {
    dispatch(requestCardDraw);
    return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getCardDrawSuccess(jsonifiedResponse.results));
        })
      .catch((error) => {
        dispatch(getTableFailure(error));
      });
  }
}

export const createDealer = (id) => {
  return dispatch => {
    dispatch(requestDealer);
    return fetch(`https://localhost:5000/api/Dealer/${id}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getDealerSuccess(jsonifiedResponse.results));
        })
      .catch((error) => {
        dispatch(getDealerFailure(error));
      });
  }
}