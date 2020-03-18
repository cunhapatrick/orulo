import React, { useState, useLayoutEffect, useEffect } from 'react';
import withConnect from 'store/withConnect';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

// HOC
import LayoutWrapper from 'hocs/LayoutWrapper';

// Functions
import { isLogged } from 'services/auth';

// Components
import Home from './Home';

export const HomeContainer = ({
	storeBuildings,
	storeFavorites,
	buildingsRequest,
	addFavorite,
	removeFavorite,
	selectBuilding,
}) => {
	const [order, setOrder] = useState('asc');
	const [searchInput, setSearchInput] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const { currentBuildings, total, loaded, error } = storeBuildings;

	const { favorites } = storeFavorites;

	useLayoutEffect(() => {
		buildingsRequest({});
	}, [buildingsRequest]);

	const handlePagination = (page) => {
		setCurrentPage(page);
		buildingsRequest({ page, order });
	};

	useEffect(() => {
		if (error !== '')
			Swal.fire({
				icon: 'error',
				title: 'Ops...',
				text: error,
			});
	}, [error]);

	const handleOrder = (o) => {
		setOrder(o);
		buildingsRequest({ order: o });
	};

	const handleSearchInput = ({ target }) => setSearchInput(target.value);

	return (
		<LayoutWrapper
			id="layout-wrapper"
			searchInput={searchInput}
			handleSearchInput={handleSearchInput}
		>
			<Home
				id="home-container"
				order={order}
				loaded={loaded}
				handleOrder={handleOrder}
				isLogged={isLogged()}
				currentBuildings={currentBuildings}
				favorites={favorites}
				addFavorite={addFavorite}
				removeFavorite={removeFavorite}
				currentPage={currentPage}
				total={total}
				selectBuilding={selectBuilding}
				handlePagination={handlePagination}
			/>
		</LayoutWrapper>
	);
};

HomeContainer.propTypes = {
	/* store */
	storeBuildings: PropTypes.object.isRequired,
	storeFavorites: PropTypes.object.isRequired,
	/* store funcs */
	buildingsRequest: PropTypes.func.isRequired,
	selectBuilding: PropTypes.func.isRequired,
	addFavorite: PropTypes.func.isRequired,
	removeFavorite: PropTypes.func.isRequired,
	/* props state */
	/* prop funcs */
};

export default withConnect(HomeContainer);
