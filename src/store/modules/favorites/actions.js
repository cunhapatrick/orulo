import { ADD_FAVORITE, REMOVE_FAVORITE, FAVORITE_PAGE } from './types';

export const addFavorite = (building) => ({ type: ADD_FAVORITE, building });
export const favoritePage = (page = 1) => ({ type: FAVORITE_PAGE, page });
export const removeFavorite = (id) => ({ type: REMOVE_FAVORITE, id });
