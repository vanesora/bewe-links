import { getItem, setItem, removeItem } from '../../../helpers/storage';
import { takeEvery, put, call } from 'redux-saga/effects';
import {
  logoutFailure,
  logoutSuccess,
  LOGOUT_START,
} from '../ducks/logout';

function* _logout(){
  try {
    //yield put(loginPending());
    yield call(removeItem, 'countSms');
    yield call(removeItem, 'idToken');
    yield call(removeItem, 'refreshToken');
    yield call(removeItem, 'accessToken');
    yield call(removeItem, 'email');
    yield call(removeItem, 'recoverpass');
    yield call(removeItem, 'phoneNumber');
    yield call(removeItem, 'screen_referral_code');
    yield call(removeItem, 'screen_verify_phone');
    yield call(removeItem, 'screen_tandc');
    yield call(removeItem, 'campaign');
    yield call(removeItem, 'onboarding');
    yield put(logoutSuccess());
    //yield put(requestCompleted());
  } catch (error: any) {
    yield put(logoutFailure(error.message));
  }
};

export default function* watchSaga() {
  yield takeEvery(LOGOUT_START, _logout);
}