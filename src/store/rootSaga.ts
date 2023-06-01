import { all, fork } from "redux-saga/effects";
import loggedInActualSaga from "../navigation/sagas/sagas";
import setupSaga from "./setup/sagas";
import loginSaga from "../screens/Login/sagas/login";
import logoutSaga from "../screens/Login/sagas/logout";
import signupSaga from "../screens/Signup/sagas/signup";


const sagas = [
  loggedInActualSaga,
  setupSaga,
  loginSaga,
  signupSaga,
  logoutSaga
];

export default function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}
