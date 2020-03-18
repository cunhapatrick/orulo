import React, { useState, useEffect } from 'react';
import withConnect from 'store/withConnect';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

// CSS
// import * as style from './Home.style';

// Components
import LayoutWrapper from 'hocs/LayoutWrapper';
import Favorites from './Favorites';

export const FavoritesContainer = ({
	storeFavorites,
	favoritePage,
	selectBuilding,
}) => {
	const [total, setTotal] = useState(0);

	const { favorites, currentFavorites } = storeFavorites;

	useEffect(() => {
		setTotal(favorites.length);
		favoritePage();
	}, [favorites, favoritePage]);

	const handlePagination = (number) => favoritePage(number);

	const { goBack } = useHistory();

	return (
		<LayoutWrapper>
			<Favorites
				id="favorites"
				favorites={currentFavorites}
				total={total}
				goBack={goBack}
				selectBuilding={selectBuilding}
				handlePagination={handlePagination}
			/>
		</LayoutWrapper>
	);
};

FavoritesContainer.propTypes = {
	/* store */
	storeFavorites: PropTypes.object.isRequired,
	/* store funcs */
	favoritePage: PropTypes.func.isRequired,
	selectBuilding: PropTypes.func.isRequired,
};

export default withConnect(FavoritesContainer);
