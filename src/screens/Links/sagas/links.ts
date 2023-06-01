import { takeEvery, put, call } from "redux-saga/effects";
import {
  getLinksFailure,
  getLinksPending,
  getLinksSuccess,
  GET_LINKS_REQUEST,
  CREATE_LINKS_REQUEST,
  DELETE_LINKS_REQUEST,
  ILinks,
  createLinksSuccess,
  deleteLinksSuccess,
} from "../ducks/links";
import { client } from "../../../api";
import { IAction } from "../../../interfaces/global";

export const getLinks = () =>
  client.get<ILinks[]>(`users`, {  headers: {"Content-Type": "application/json"} });

  export const createLink = (payload: {name: string, url: string}) =>
  client.post<string>(
    'users',
    payload, {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  export const deleteLink = (payload: string) =>
  client.delete<string>(
    'users/'+payload,{
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

function* _getLinks() {
  try {
    yield put(getLinksPending());
    const resp:ILinks[] = yield call(getLinks);
    yield put(getLinksSuccess(resp));
  } catch (error: any) {
    yield put(getLinksFailure(error.message || "Something went wrong"));
  }
}

function* _createLinks({ payload }: IAction) {
  try {
    yield put(getLinksPending());
    const resp:string = yield call(createLink, {name: payload.name, url:payload.url});
    yield put(createLinksSuccess([...payload.actualList.push(resp)]));
  } catch (error: any) {
    yield put(getLinksFailure(error.message || "Something went wrong"));
  }
}

function* _deleteLinks({ payload }: IAction) {
  try {
    yield put(getLinksPending());
    const resp:string = yield call(deleteLink,payload.id);
    yield put(deleteLinksSuccess([...payload.actualList.filter((x:ILinks) => x.id != resp )]));
  } catch (error: any) {
    yield put(getLinksFailure(error.message || "Something went wrong"));
  }
}

export default function* watchSaga() {
  yield takeEvery(GET_LINKS_REQUEST, _getLinks);
  yield takeEvery(CREATE_LINKS_REQUEST, _createLinks);
  yield takeEvery(DELETE_LINKS_REQUEST, _deleteLinks);
}
