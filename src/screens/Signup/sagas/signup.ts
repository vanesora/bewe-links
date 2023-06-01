import { client } from '../../../api';
import { takeEvery, put, call } from 'redux-saga/effects';
import {
  signupCompleted,
  signupFailure,
  signupPending,
  signupSuccess,
  SIGNUP_REQUEST,
  ISignupData,
  ISignupResponse,
} from '../ducks/signup';
import { IAction, IGenericResponse } from '../../../interfaces/global';
import { removeItem } from '../../../helpers/storage';

export const signup = (payload: ISignupData) =>
  client.post<IGenericResponse>(
    'auth/singin',
    payload, {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

function* _signup({ payload }: IAction) {
  try {
    yield put(signupPending());
    const {
      email,
      name,
    }: ISignupResponse = yield call(signup, payload);
    yield put(signupCompleted());
    yield put(signupSuccess({email, name}));

  } catch (err: any) {
    const error = err.errorObject;
    let errorList: string = '';

    if (typeof error.error != 'undefined' && Array.isArray(error.error)) {
      Object.entries(error.error).map(([key, value]) => {
        errorList = errorList + '<p>' + String(value) + '</p>';
      })
    }
    else if (typeof error.error != 'undefined') {
      errorList = error.error.details ? error.error.details[0].message : error.error;
    }
    yield put(signupFailure(errorList || error.message || 'Something went wrong'));
    yield put(signupCompleted());
    yield call(removeItem, 'limited_home_ca_tx')
  }
};

export default function* watchSaga() {
  yield takeEvery(SIGNUP_REQUEST, _signup);
}
