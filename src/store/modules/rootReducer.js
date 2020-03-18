import { combineReducers } from 'redux';

import storeBuildings from './buildings/reducer';
import storeFavorites from './favorites/reducer';

export default combineReducers({
	storeBuildings,
	storeFavorites,
});
