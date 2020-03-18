import React from 'react';
import PropTypes from 'prop-types';

// Ant design
import { Row, Col } from 'antd';

// functions
import { formatCurrency } from 'utils/currency';

// CSS
import * as Style from './Building.style';

export const Building = ({ building, goBack }) => (
	<>
		<Style.PageHeader title="Building" onBack={() => goBack()} />
		<Style.Container>
			<Row>
				<Col span={8} xs={24} lg={8}>
					<div className="title">{building.name}</div>
					<img src={(building.default_image || {})['520x280']} alt="building" />
				</Col>
				<Col span={15} xs={24} lg={15}>
					<div className="subtitle">
						<span>Id do imóvel</span> #{building.id}
					</div>
					<div className="subtitle">
						<span>Preço minino</span>{' '}
						{formatCurrency(building.min_price, 2, 'R$')}
					</div>
					<div className="subtitle">Descrição</div>
					<div className="description">{building.description}</div>
				</Col>
			</Row>
		</Style.Container>
	</>
);

Building.propTypes = {
	/* prop state */
	building: PropTypes.object.isRequired,
	goBack: PropTypes.func.isRequired,
};

export default Building;
