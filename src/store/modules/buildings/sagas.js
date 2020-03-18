import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from 'services/api';

import { BUILDINGS_REQUEST, BUILDINGS_SUCCESS, BUILDINGS_FAIL } from './types';

function* fetchBuildings({ page, order }) {
	try {
		const { data } = yield call(
			api.get,
			`buildings?page=${page}&price_order=${order}&results_per_page=8`
		);

		// throw new Error('teste');
		const { buildings, total } = data;

		const payload = { buildings, total };

		yield put({ type: BUILDINGS_SUCCESS, payload });
	} catch (err) {
		yield put({ type: BUILDINGS_FAIL, payload: err });
	}
}

export default all([takeLatest(BUILDINGS_REQUEST, fetchBuildings)]);
