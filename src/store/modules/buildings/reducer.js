import produce from 'immer';
import initialState from './store';

import {
	BUILDINGS_REQUEST,
	BUILDINGS_SUCCESS,
	SELECT_BUILDING,
	BUILDINGS_FAIL,
} from './types';

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECT_BUILDING:
			return produce(state, (draft) => {
				draft.buildingSelected = action.building;
			});

		case BUILDINGS_REQUEST:
			return produce(state, (draft) => {
				draft.currentBuildings = [];
				draft.loaded = false;
			});

		case BUILDINGS_SUCCESS:
			return produce(state, (draft) => {
				const { buildings, total } = action.payload;

				const currentBuildings = buildings;
				draft.currentBuildings = currentBuildings;
				draft.total = total;
				draft.loaded = true;
			});

		case BUILDINGS_FAIL:
			return produce(state, (draft) => {
				draft.error = action.payload.message;
				draft.loaded = true;
			});
		default:
			return state;
	}
};

export default reducer;
