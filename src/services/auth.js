import { setLocalStorage, getLocalStorage } from 'utils/localStorage';

export const login = (user) => {
	setLocalStorage('user', user);
	window.location.reload();
	// }
};

export const signup = (user) => {
	const users = getLocalStorage('users') || [];
	setLocalStorage('users', [...users, user]);
	login(user);
};

export const logout = () => {
	localStorage.removeItem('user');
	window.location.reload();
};

export const isLogged = () => !!getLocalStorage('user');
