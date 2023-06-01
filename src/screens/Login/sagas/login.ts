import { takeEvery, put, call, all } from "redux-saga/effects";
import { client } from "../../../api";
import {
  removeItem,
  setItem,
} from "../../../helpers/storage";
import { IAction } from "../../../interfaces/global";
import {
  loginPending,
  loginSuccess,
  loginFailure,
  loginCompleted,
  LOGIN_START,
  ILoginResponse,
  ILoginData,
} from "../ducks/login";

export const login = (data: ILoginData) =>
  client.post<ILoginResponse>("auth/login", data,  {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const postLogin = async ({ email, password }: ILoginData) => {
  const data: ILoginData = {
    email: email,
    password
  };
  return await login(data);
};

function* _login({ payload }: IAction): any {
  try {
    yield put(loginPending());
    const {
      email,
      token,
      name,
    }: ILoginResponse = yield call(postLogin, payload);
    yield call(setItem, 'token', token);
    yield call(setItem, 'email', email);
    yield call(setItem, 'name', name);
    yield put(loginCompleted());
    yield put(loginSuccess({email, token, name}));
  } catch (error: any) {
    let code: string = "";
    let message: string = "";
    if (error.message === "User is not confirmed.") {
      code = "UserNotConfirmedException";
      message = "";
    } else {
      message = error.message;
      code = "";
    }
    yield removeItem("dataLayerLogin");
    yield call(removeItem, "limited_home_ca_tx");
    yield put(loginFailure({ errorMessage: message, errorCode: code }));
    yield put(loginCompleted());
  }
}

export default function* watchSaga() {
  yield takeEvery(LOGIN_START, _login);
}
