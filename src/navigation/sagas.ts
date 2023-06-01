import { takeEvery, put } from 'redux-saga/effects';
import {
  getPathFailure,
  getPathPending,
  getPathSuccess,
  GET_SCHEMA_PATH_REQUEST,
} from './ducks/ducks';

export const getPath = () => {return window.location.pathname};

function* _getSchemaPath() {
  let value = '/'
  try {
    yield put(getPathPending());
    const path: string = getPath();
    value = path;
    yield put(getPathSuccess(value));
  } catch (error: any) {
    yield put(getPathFailure(error.message || 'Something went wrong'));
  }
};

export default function* watchSaga() {
  yield takeEvery(GET_SCHEMA_PATH_REQUEST, _getSchemaPath);
}
