import React from 'react';
import PropTypes from 'prop-types';

// Icons
import { HomeFilled, CaretUpFilled, CaretDownFilled } from '@ant-design/icons';

// Antd components
import { Pagination, Row, Button, Skeleton } from 'antd';

// Components
import BuildingCard from 'components/BuildingCard';

// CSS
import * as Style from './Home.style';

const LoadingCard = (
	<Row gutter={16}>
		{[
			'skeleton1',
			'skeleton2',
			'skeleton3',
			'skeleton4',
			'skeleton5',
			'skeleton6',
			'skeleton7',
			'skeleton8',
		].map((skeleton) => (
			<Style.Col key={skeleton} xs={12} md={6}>
				<Style.Card className="card-loading">
					<Skeleton loading active paragraph={{ rows: 8 }} />
				</Style.Card>
			</Style.Col>
		))}
	</Row>
);

export const Home = ({
	currentBuildings,
	currentPage,
	addFavorite,
	removeFavorite,
	selectBuilding,
	favorites,
	total,
	handlePagination,
	isLogged,
	order,
	loaded,
	handleOrder,
}) => {
	const renderLoaded =
		currentBuildings.length > 0 ? (
			<>
				{/* Building Grid */}
				<Row gutter={16}>
					{currentBuildings.map((building) => (
						<Style.Col key={building.id} xs={12} md={6}>
							<BuildingCard
								building={building}
								addFavorite={addFavorite}
								removeFavorite={removeFavorite}
								selectBuilding={selectBuilding}
								isFavorite={favorites.some((f) => f.id === building.id)}
								isLogged={isLogged}
								showFavorite
							/>
						</Style.Col>
					))}
				</Row>
				{/* Pagination */}
				<Row justify="center">
					<Style.Col xs={12}>
						<Pagination
							defaultCurrent={currentPage}
							pageSize={12}
							hideOnSinglePage
							onChange={handlePagination}
							total={total}
						/>
					</Style.Col>
				</Row>
			</>
		) : (
			<Row justify="center">
				<Style.Col xs={12}>
					<Style.Empty
						image={<HomeFilled />}
						imageStyle={{ fontSize: 240, height: 240 }}
						description="Nenhum imóvel encontrado"
					/>
				</Style.Col>
			</Row>
		);

	return (
		<>
			<Style.PageHeader
				title="Imóveis"
				extra={[
					'Ordenar: ',
					<Button
						key="ordem"
						type="link"
						onClick={() =>
							order === 'asc' ? handleOrder('desc') : handleOrder('asc')
						}
					>
						{order === 'asc' ? 'Menor Preço' : 'Maior Preço'}{' '}
						{order === 'asc' ? <CaretDownFilled /> : <CaretUpFilled />}
					</Button>,
				]}
			/>
			<Style.Container>{loaded ? renderLoaded : LoadingCard}</Style.Container>
		</>
	);
};

Home.propTypes = {
	/* store states */
	total: PropTypes.number.isRequired,
	favorites: PropTypes.array.isRequired,
	currentBuildings: PropTypes.array.isRequired,
	loaded: PropTypes.bool.isRequired,
	/* store funcs */
	addFavorite: PropTypes.func.isRequired,
	removeFavorite: PropTypes.func.isRequired,
	selectBuilding: PropTypes.func.isRequired,
	/* local state */
	order: PropTypes.string.isRequired,
	currentPage: PropTypes.number.isRequired,
	/* local funcs */
	handlePagination: PropTypes.func.isRequired,
	handleOrder: PropTypes.func.isRequired,
	/* prop state */
	isLogged: PropTypes.bool.isRequired,
};

export default Home;
