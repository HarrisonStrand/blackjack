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

export const getDraw2CardsSuccess = (draw2cards) => ({
  type: c.GET_DRAW2CARDS_SUCCESS,
  draw2cards
});

export const getDraw2CardsFailure = (error) => ({
  type: c.GET_DRAW2CARDS_FAILURE,
  error
});

export const requestHit = () => ({
  type: c.REQUEST_HIT
});

export const getHitSuccess = (Hit) => ({
  type: c.GET_HIT_SUCCESS,
  Hit
});

export const getHitFailure = (error) => ({
  type: c.GET_HIT_FAILURE,
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
    dispatch(requestDeck);
    return fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getDeckSuccess(jsonifiedResponse));
        })
      .catch((error) => {
        dispatch(getDeckFailure(error));
      });
  }
}

export const drawTwoCards = (deckId) => {
  return dispatch => {
    dispatch(requestDraw2Cards);
    return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getDraw2CardsSuccess(jsonifiedResponse.cards));
        })
      .catch((error) => {
        dispatch(getDraw2CardsFailure(error));
      });
  }
}

export const Hit = (deckId) => {
  return dispatch => {
    dispatch(requestHit);
    return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getHitSuccess(jsonifiedResponse.cards));
        })
      .catch((error) => {
        dispatch(getHitFailure(error));
      });
  }
}

export const createDealer = (id) => {
  return dispatch => {
    dispatch(requestDealer);
    return fetch(`http://localhost:5000/api/Dealer/${id}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getDealerSuccess(jsonifiedResponse));
        })
      .catch((error) => {
        console.log("error", error);
        dispatch(getDealerFailure(error));
      });
  }
}