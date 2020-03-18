import React from 'react';
import PropTypes from 'prop-types';

// CSS
import * as Style from './Header.style';

// Components
import Header from './Header';

const HeaderContainer = ({
	isLogged,
	user,
	handleModalLogin,
	handleModalSignup,
	logout,
}) => (
	<Style.Header id="header">
		<Header
			isLogged={isLogged}
			user={user}
			handleModalLogin={handleModalLogin}
			handleModalSignup={handleModalSignup}
			logout={logout}
		/>
	</Style.Header>
);

HeaderContainer.propTypes = {
	isLogged: PropTypes.bool.isRequired,
	handleModalLogin: PropTypes.func.isRequired,
	handleModalSignup: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
};

export default HeaderContainer;
