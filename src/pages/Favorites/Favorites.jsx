import React from 'react';
import PropTypes from 'prop-types';

// Antd components
import { Pagination, Row } from 'antd';

// Components
import BuildingCard from 'components/BuildingCard';

// CSS
import * as Style from './Favorites.style';

export const Favorites = ({
	favorites,
	total,
	handlePagination,
	selectBuilding,
	goBack,
}) => (
	<>
		<Style.PageHeader title="Favoritos" onBack={() => goBack()} />
		{favorites.length > 0 ? (
			<>
				<Style.Row justify="center" gutter={16}>
					{favorites.map((building) => (
						<Style.Col key={building.id} span={5} xs={12} md={6}>
							<BuildingCard
								building={building}
								selectBuilding={selectBuilding}
							/>
						</Style.Col>
					))}
				</Style.Row>
				{favorites.length > 0 && (
					<Style.Row justify="center">
						<Style.Col xs={12}>
							<Pagination
								defaultCurrent={1}
								onChange={handlePagination}
								total={total}
							/>
						</Style.Col>
					</Style.Row>
				)}
			</>
		) : (
			<Row justify="center" align="bottom">
				<Style.Col xs={12}>
					<Style.Empty
						imageStyle={{
							width: 525,
							height: 240,
							textAlign: 'center',
						}}
						image={<img src="img/icons/broken-heart.png" alt="broken-heart" />}
						description="Sem imóveis selecionados"
					/>
				</Style.Col>
			</Row>
		)}
	</>
);

Favorites.propTypes = {
	favorites: PropTypes.array.isRequired,
	total: PropTypes.number.isRequired,
	handlePagination: PropTypes.func.isRequired,
	selectBuilding: PropTypes.func.isRequired,
	goBack: PropTypes.func.isRequired,
};

export default Favorites;
