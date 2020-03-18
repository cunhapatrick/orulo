import React from 'react';
import PropTypes from 'prop-types';

// Ant Design Components
import {
	UserOutlined,
	HeartFilled,
	LoginOutlined,
	LogoutOutlined,
	HomeFilled,
} from '@ant-design/icons';

// CSS
import * as Style from './Header.style';

const Header = ({
	isLogged,
	user,
	handleModalLogin,
	handleModalSignup,
	logout,
}) => {
	// User Menu Dropdown
	const userMenuItems = (
		<Style.UserMenuItem>
			<Style.UserMenuItem.Item onClick={logout}>
				<LogoutOutlined /> Logout
			</Style.UserMenuItem.Item>
		</Style.UserMenuItem>
	);
	// Guest Menu Dropdown
	const guestMenuItems = (
		<Style.UserMenuItem>
			<Style.UserMenuItem.Item
				icon={<LoginOutlined />}
				onClick={handleModalLogin}
			>
				Login
			</Style.UserMenuItem.Item>
			<Style.UserMenuItem.Item
				icon={<LogoutOutlined />}
				onClick={handleModalSignup}
			>
				Registro
			</Style.UserMenuItem.Item>
		</Style.UserMenuItem>
	);

	return (
		<Style.Container>
			{/* Navbar */}
			<Style.Navbar>
				<Style.NavLink to="/">
					<HomeFilled /> Inicio
				</Style.NavLink>
				{isLogged && (
					<Style.NavLink to="/favorite">
						<HeartFilled /> Favoritos
					</Style.NavLink>
				)}
				<Style.NavbarMenu>
					{isLogged ? (
						<>
							<Style.UserDropdown
								overlay={userMenuItems}
								placement="bottomRight"
							>
								<Style.Button size="large" icon={<UserOutlined />}>
									<Style.UserNameSpan>{user.name}</Style.UserNameSpan>
								</Style.Button>
							</Style.UserDropdown>
						</>
					) : (
						<>
							<Style.UserDropdown
								overlay={guestMenuItems}
								placement="bottomRight"
							>
								<Style.Button
									id="btn-login"
									size="large"
									icon={<UserOutlined />}
								>
									<span>Login ou Registro</span>
								</Style.Button>
							</Style.UserDropdown>
						</>
					)}
				</Style.NavbarMenu>
			</Style.Navbar>
		</Style.Container>
	);
};

Header.propTypes = {
	isLogged: PropTypes.bool.isRequired,
	handleModalLogin: PropTypes.func.isRequired,
	handleModalSignup: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
};

export default Header;
