import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { isLogged } from 'services/auth';

// Components
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Building from './pages/Building';
import NotFound404 from './pages/NotFound404';

const AuthRoute = ({ children, ...rest }) => (
	<Route {...rest} render={() => (isLogged() ? children : <Redirect />)} />
);

const Routes = () => (
	<Switch>
		<Route exact path="/">
			<Home />
		</Route>
		<AuthRoute path="/favorite">
			<Favorites />
		</AuthRoute>
		<Route path="/building">
			<Building />
		</Route>
		<Route path="*">
			<NotFound404 />
		</Route>
	</Switch>
);

AuthRoute.propTypes = {
	children: PropTypes.any.isRequired,
};

export default Routes;
