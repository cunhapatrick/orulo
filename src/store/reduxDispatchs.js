import { bindActionCreators } from 'redux';
import * as buildingsActions from './modules/buildings/actions';
import * as favoritesActions from './modules/favorites/actions';

const actions = {
	...buildingsActions,
	...favoritesActions,
};

export const buildMapStateToProps = (state, fields = null) => {
	if (fields === null) {
		return {
			storeBuildings: state.storeBuildings,
			storeFavorites: state.storeFavorites,
		};
	}

	return fields.reduce(
		(result, current) => ({
			...result,
			[current]: state[current],
		}),
		{}
	);
};

export const buildmapDispatchToProps = (dispatch) =>
	bindActionCreators(actions, dispatch);
