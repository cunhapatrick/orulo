import styled from 'styled-components';
import { Card } from 'antd';

export const Container = styled.div`
	> button {
		opacity: 0;
	}
	&:hover {
		box-shadow: 2px 2px 5px lightgrey;

		> button {
			opacity: 1;
		}
	}
`;

export const ActionButton = styled.button`
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	border: none;
	position: absolute;
	background-color: transparent;
	background-repeat: no-repeat;
	outline: none;
	overflow: hidden;
`;

export const CardBuilding = styled(Card)`
	box-shadow: 1px 1px 2.5px lightgrey;

	img {
		padding: 0;
		height: 292px;
	}
	height: 370px;
	max-height: 370px;
	@media (max-width: 568px) {
		height: 190px;
		max-height: 190px;
		img {
			padding: 0.45rem;
			height: 125px;
		}
	}
`;

export const CardBuildingMeta = styled(Card.Meta)`
	color: black;
`;

export const FloatButton = styled.button`
	position: absolute;
	top: 10px;
	right: 20px;
	z-index: 1;
	background: rgba(255, 255, 255, 0.5);
	border-radius: 50%;
	border: none;
	padding: 5px 10px;
	color: blue;
`;
