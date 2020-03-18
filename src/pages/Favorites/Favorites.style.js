import styled from 'styled-components';
import {
	Row as row,
	Col as col,
	Empty as empty,
	PageHeader as pageHeader,
} from 'antd';

export const Row = styled(row)`
	margin: 30px 0;
`;

export const Col = styled(col)`
	margin-bottom: 2rem;
`;

export const Empty = styled(empty)`
	text-align: center;
	font-size: 24px;
	font-weight: bold;
`;

export const PageHeader = styled(pageHeader)`
	.ant-page-header-heading-extra {
		font-weight: bold;
		font-size: 16px;

		button {
			color: black;
			width: 75px;
			padding: 0;
		}
	}
`;
