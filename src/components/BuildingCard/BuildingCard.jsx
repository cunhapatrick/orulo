import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

// Antd Components
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

// CSS
import * as Style from './BuildingCard.style';

const BuildingCard = ({
	building,
	isLogged,
	isFavorite,
	showFavorite,
	addFavorite,
	removeFavorite,
	selectBuilding,
}) => {
	const { push } = useHistory();

	const buildingDetails = (b) => {
		selectBuilding(b);
		push('/building');
	};

	return (
		<Style.Container className="building-card">
			<Style.CardBuilding
				cover={
					<img src={(building.default_image || {})['520x280']} alt="building" />
				}
			>
				<Style.CardBuildingMeta title={building.name} />
			</Style.CardBuilding>
			<Style.ActionButton onClick={() => buildingDetails(building)} />
			{isLogged && showFavorite && (
				<Style.FloatButton
					type="link"
					onClick={() =>
						!isFavorite ? addFavorite(building) : removeFavorite(building.id)
					}
				>
					{isFavorite ? <HeartFilled /> : <HeartOutlined />}
				</Style.FloatButton>
			)}
		</Style.Container>
	);
};
BuildingCard.propTypes = {
	/* prop states */
	building: PropTypes.object.isRequired,
	// favorite: PropTypes.bool.isRequired,
	isLogged: PropTypes.bool,
	isFavorite: PropTypes.bool,
	showFavorite: PropTypes.bool,
	/* props funcs */
	addFavorite: PropTypes.func,
	removeFavorite: PropTypes.func,
	selectBuilding: PropTypes.func.isRequired,
};

BuildingCard.defaultProps = {
	showFavorite: false,
	addFavorite: () => {},
	removeFavorite: () => {},
	isLogged: false,
	isFavorite: false,
};

export default BuildingCard;
