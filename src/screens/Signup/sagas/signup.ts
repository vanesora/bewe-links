import { client } from '../../../api';
import { getItem, getItemObject, removeItem, setItem } from '../../../helpers/storage';
import { takeEvery, put, call, all } from 'redux-saga/effects';
import {
  signupCompleted,
  signupFailure,
  signupPending,
  signupSuccess,
  SIGNUP_REQUEST,
} from '../ducks/signup';
import { IAction, IGenericResponse } from '../../../interfaces/global';

export const tapitSignup = (payload: any) =>
  client.post<IGenericResponse>(
    'client',
    payload
  );

function* _signup({ payload }: IAction) {
  try {
    yield put(signupPending());
    const { firstName, lastName, birthdate, email, phoneNumber, password, zipcode } = payload;

    

    yield put(signupCompleted());
    // fix: find points earned here to add

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
    yield removeItem('dataLayerSignup');
    yield put(signupFailure(errorList || error.message || 'Something went wrong'));
    yield put(signupCompleted());
    yield call(removeItem, 'limited_home_ca_tx')
  }
};

export default function* watchSaga() {
  yield takeEvery(SIGNUP_REQUEST, _signup);
}
