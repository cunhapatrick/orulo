import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Col as col, Tag, Button as btn, Dropdown, Menu } from 'antd';

export const UserDropdown = styled(Dropdown)`
	margin-left: 7px;
`;

export const UserMenuItem = styled(Menu)``;
export const Header = styled.div``;
export const Container = styled.div`
	background-color: #fff159;
	box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
	padding: 0.45rem 15px;
	position: relative;
	z-index: 3;
`;
export const Col = styled(col)``;
export const CategoryCol = styled(col)``;
export const NavLink = styled(Link)`
	color: black;
	font-size: 18px;
`;

export const Span = styled.span`
	margin-left: 15px;
`;

export const CheckableTag = styled(Tag.CheckableTag)`
	font-weight: normal;
	font-size: 1rem;
	padding: 5px;
	&:hover {
		cursor: pointer;
	}
`;

export const Button = styled(btn)`
	font-weight: bold;

	&#btn-login span:last-of-type {
		display: inline-block;
		@media (max-width: 568px) {
			display: none;
		}
	}
`;

// Custom Styles
export const Navbar = styled.div`
	width: 50%;
	@media (max-width: 586px) {
		width: 100%;
	}
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	a {
		margin-right: 25px;
	}
`;

export const NavbarLogo = styled.div`
	-webkit-box-flex: 1;
	flex: 1;
`;

export const NavbarMenu = styled.div``;

export const NavScroller = styled.div`
	position: relative;
	z-index: 2;
	height: 2.75rem;
	overflow-y: hidden;
`;

export const NavCategories = styled.nav`
	display: flex;
	flex-wrap: nowrap;
	padding-top: 0.45rem;
	padding-bottom: 1rem;
	padding-left: 15px;
	padding-right: 15px;
	margin-top: -1px;
	overflow-x: auto;
	text-align: center;
	white-space: nowrap;
	-webkit-overflow-scrolling: touch;
	background-color: white;
	align-items: center;

	> div {
		font-weight: bold;
		font-size: 1rem;
		padding: 5px;
	}
`;

export const UserNameSpan = styled.span`
	@media (max-width: 568px) {
		display: none !important;
	}
`;
