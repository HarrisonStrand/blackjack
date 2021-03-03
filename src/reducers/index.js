import deckReducer from './deck-reducer';
import dealerReducer from './dealer-reducer';
import drawTwoCardsReducer from './card-draw-reducer';
import hitReducer from './hit-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	deck: deckReducer,
	dealer: dealerReducer,
	twoCardsToDeal: drawTwoCardsReducer,
	hit: hitReducer
});

export default rootReducer;