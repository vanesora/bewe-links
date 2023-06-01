import { takeEvery, put, call } from 'redux-saga/effects';
import {
  getLoggedInFailure,
  getLoggedInPending,
  getLoggedInSuccess,
  GET_LOGGED_IN_REQUEST,
} from '../ducks/ducks';
import { getItem } from '../../helpers/storage';



function* _getSchemaLoggedIn() {
  let value = false
  try {
    yield put(getLoggedInPending());
    const token: string = yield getItem('token');
    value = token? true : false;
    yield put(getLoggedInSuccess(value));
  } catch (error: any) {
    yield put(getLoggedInFailure(error.message || 'Something went wrong'));
  }
};

export default function* watchSaga() {
  yield takeEvery(GET_LOGGED_IN_REQUEST, _getSchemaLoggedIn);
}
