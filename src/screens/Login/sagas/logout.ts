import { cleanStorage } from '../../../helpers/storage';
import { takeEvery, put, call } from 'redux-saga/effects';
import {
  logoutFailure,
  logoutSuccess,
  LOGOUT_START,
} from '../ducks/logout';
import { getLoggedInSuccess } from '../../../navigation/ducks/ducks';

function* _logout(){
  try {
    //yield put(loginPending());
    yield call(cleanStorage);
    yield put(logoutSuccess());
    yield put(getLoggedInSuccess(false));
  } catch (error: any) {
    yield put(logoutFailure(error.message));
  }
};

export default function* watchSaga() {
  yield takeEvery(LOGOUT_START, _logout);
}