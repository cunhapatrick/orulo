import produce from 'immer';
import initialState from './store';

import { ADD_FAVORITE, REMOVE_FAVORITE, FAVORITE_PAGE } from './types';

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAVORITE:
			return produce(state, (draft) => {
				draft.favorites.push(action.building);
			});
		case REMOVE_FAVORITE:
			return produce(state, (draft) => {
				draft.favorites = draft.favorites.filter((f) => f.id !== action.id);
			});
		case FAVORITE_PAGE:
			return produce(state, (draft) => {
				draft.currentFavorites = draft.favorites.slice(
					(action.page - 1) * 12,
					action.page * 12
				);
			});

		default:
			return state;
	}
};

export default reducer;
