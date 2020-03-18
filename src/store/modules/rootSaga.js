import { all } from 'redux-saga/effects';

import buildings from './buildings/sagas';

export default function* rootSaga() {
	yield all([buildings]);
}
