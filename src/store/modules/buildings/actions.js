import { SELECT_BUILDING, BUILDINGS_REQUEST } from './types';

export const buildingsRequest = ({ page = 1, order = 'asc' }) => ({
	type: BUILDINGS_REQUEST,
	page,
	order,
});

export const selectBuilding = (building) => ({
	type: SELECT_BUILDING,
	building,
});
