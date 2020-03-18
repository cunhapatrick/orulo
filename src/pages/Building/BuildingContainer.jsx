import React, { useLayoutEffect } from 'react';
import withConnect from 'store/withConnect';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

// CSS
// import * as style from './Home.style';

// Components
import LayoutWrapper from 'hocs/LayoutWrapper';
import Building from './Building';

export const BuildingContainer = ({ storeBuildings }) => {
	const { goBack, push } = useHistory();

	useLayoutEffect(() => {
		if (!storeBuildings.buildingSelected.id) push('/');
	}, [storeBuildings.buildingSelected, push]);

	return (
		<LayoutWrapper>
			<Building building={storeBuildings.buildingSelected} goBack={goBack} />
		</LayoutWrapper>
	);
};

BuildingContainer.propTypes = {
	/* store */
	storeBuildings: PropTypes.object.isRequired,
};

export default withConnect(BuildingContainer, ['storeBuildings']);
