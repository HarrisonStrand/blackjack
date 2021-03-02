import tableReducer from 'table-reducer';
import deckReducer from 'deck-reducer';
import dealerReducer from 'dealer-reducer';
import cardDrawReducer from 'card-draw-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	table: tableReducer,
	deck: deckReducer,
	dealer: dealerReducer,
	card: cardDrawReducer
});

export default rootReducer;