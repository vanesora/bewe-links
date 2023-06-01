import { all, fork } from "redux-saga/effects";
import loggedInActualSaga from "../navigation/sagas/sagas";
import setupSaga from "./setup/sagas";
import loginSaga from "../screens/Login/sagas/login";


const sagas = [
  loggedInActualSaga,
  setupSaga,
  loginSaga
];

export default function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}
