
import { takeEvery, put, call } from 'redux-saga/effects';
import {
  getLogoutRedirectFailure,
  getLogoutRedirectPending,
  getLogoutRedirectSuccess,
  GET_LOGOUT_REDIRECT_REQUEST,
} from '../ducks/logoutRedirect';

function* _getLogoutRedirect() {
  try {
    yield put(getLogoutRedirectPending());
    // const resp: IGenericResponse = yield call(getGlobalConfigurations, 'logoutRedirect');
    // yield put(getLogoutRedirectSuccess(resp.data[0].value));
  } catch (error: any) {
    yield put(getLogoutRedirectFailure(error.message || 'Something went wrong'));
  }
};

export default function* watchSaga() {
  yield takeEvery(GET_LOGOUT_REDIRECT_REQUEST, _getLogoutRedirect);
}
