import { all, fork } from "redux-saga/effects";
import pathActualSaga from "../navigation/sagas";
import setupSaga from "./setup/sagas";


const sagas = [
  pathActualSaga,
  setupSaga,
];

export default function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}
