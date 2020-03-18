import axios from 'axios';

export default axios.create({
	baseURL: 'https://www.orulo.com.br/api/v2/',
	headers: {
		Authorization: 'Bearer a8vZ5ZYVb9c4TyaPwhKTfx8ilehxmPG6lp86KASiHgU',
	},
});
