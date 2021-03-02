import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

//DEALER
describe('dealer reducer actions', () => {
  it('requestDealer should create REQUEST_DEALER action', () => {
    expect(actions.requestDealer()).toEqual({
      type: c.REQUEST_DEALER
    });
  });

  it('getDealerSuccess should create GET_DEALER_SUCCESS action', () => {
    const dealer = "A dealer";
    expect(actions.getDealerSuccess(dealer)).toEqual({
      type: c.GET_DEALER_SUCCESS,
      dealer
    });
  });

  it('getDealerFailure should create GET_DEALER_FAILURE action', () => {
    const error = "An error";
    expect(actions.getDealerFailure(error)).toEqual({
      type: c.GET_DEALER_FAILURE,
      error
    });
  });
})

//DECK
describe('deck reducer actions', () => {
  it('requestDeck should create REQUEST_DECK action', () => {
    expect(actions.requestDeck()).toEqual({
      type: c.REQUEST_DECK
    });
  });

  it('getDeckSuccess should create GET_DECK_SUCCESS action', () => {
    const deck = "A deck";
    expect(actions.getDeckSuccess(deck)).toEqual({
      type: c.GET_DECK_SUCCESS,
      deck
    });
  });

  it('getDeckFailure should create GET_DECK_FAILURE action', () => {
    const error = "An error";
    expect(actions.getDeckFailure(error)).toEqual({
      type: c.GET_DECK_FAILURE,
      error
    });
  });
})

//DRAW2CARDS
describe('draw2cards reducer actions', () => {
  it('requestDeck should create REQUEST_DRAW2CARDS action', () => {
    expect(actions.requestDraw2Cards()).toEqual({
      type: c.REQUEST_DRAW2CARDS
    });
  });

  it('getDraw2cardsSuccess should create GET_DRAW2CARDS_SUCCESS action', () => {
    const draw2cards = "A draw2cards";
    expect(actions.getDraw2CardsSuccess(draw2cards)).toEqual({
      type: c.GET_DRAW2CARDS_SUCCESS,
      draw2cards
    });
  });

  it('getDraw2cardsFailure should create GET_DRAW2CARDS_FAILURE action', () => {
    const error = "An error";
    expect(actions.getDraw2CardsFailure(error)).toEqual({
      type: c.GET_DRAW2CARDS_FAILURE,
      error
    });
  });
})