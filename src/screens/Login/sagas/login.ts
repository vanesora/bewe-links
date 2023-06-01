import { takeEvery, put, call, all } from 'redux-saga/effects';
import { client } from '../../../api';
import { getItem, getItemObject, removeItem, setItem } from '../../../helpers/storage';
import { IAction, IGenericResponse } from '../../../interfaces/global';
import {
  loginPending,
  loginSuccess,
  loginFailure,
  loginCompleted,
  LOGIN_START,
  ILoginData,
  ILoginResponse,
  IDataLogin, LOGINSOCIAL_START,
} from '../ducks/login';

export const tapitLogin = (data: IDataLogin) =>
  client.post<ILoginResponse>('auth/login', data);


function* checkUserAnniversaryAndBirthday(user: any) {
  let lastLogin: number;

  try {
    lastLogin = user.sesions.day_last_login;
  } catch (error) {
    console.log({ error });
  }


}

function* _login({ payload }: IAction):any {
  try {
    yield put(loginPending());

    yield put(loginCompleted());
  } catch (error: any) {
    let code: string = '';
    let message: string = '';
    if (error.message === 'User is not confirmed.') {
      code = 'UserNotConfirmedException';
      message = '';
    } else {
      message = error.message;
      code = '';
    }
    yield removeItem('dataLayerLogin');
    yield call(removeItem, 'limited_home_ca_tx')
    yield put(loginFailure({ errorMessage: message, errorCode: code }));
    yield put(loginCompleted());
  }
}

export default function* watchSaga() {
  yield takeEvery(LOGIN_START, _login);
}
