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
import { getItem } from "../../../helpers/storage";

export const getLinks = (payload: string) =>
  client.get<{ message: string; data: ILinks[] }>(`links`, {
    headers: { "Content-Type": "application/json", "Authorization" : "Bearer "+payload },
  });

export const createLink = (payload: {
  name: string;
  url: string;
  token: string;
}) =>
  client.post<string>("links/add", {name:payload.name, url:payload.url}, {
    headers: {
      "Content-Type": "application/json",
      "Authorization" : "Bearer "+payload.token
    },
  });

export const deleteLink = (payload: string, token: string) =>
  client.delete<string>("links", {
    data:{
      id: payload
    },
    headers: {
      "Content-Type": "application/json",
      "Authorization" : "Bearer "+token
    },
  });

function* _getLinks() {
  try {
    yield put(getLinksPending());
    const token: string = yield getItem("token");
    const resp: { message: string; data: ILinks[] } = yield call(
      getLinks,
      token
    );
    yield put(getLinksSuccess(resp.data));
  } catch (error: any) {
    yield put(getLinksFailure(error.message || "Something went wrong"));
  }
}

function* _createLinks({ payload }: IAction) {
  try {
    yield put(getLinksPending());
    const token: string = yield getItem("token");
    const resp: { message: string; data: ILinks } = yield call(createLink, {
      name: payload.name,
      url: payload.url,
      token,
    });
    const newList = [...payload.actualList, resp.data];
    yield put(createLinksSuccess(newList));
  } catch (error: any) {
    yield put(getLinksFailure(error.message || "Something went wrong"));
  }
}

function* _deleteLinks({ payload }: IAction) {
  try {
    yield put(getLinksPending());
    const token: string = yield getItem("token");
    const resp: string = yield call(deleteLink, payload.id, token);
    console.log(payload.actualList.filter((x: ILinks) => x.id != payload.id));
    yield put(      
      deleteLinksSuccess(payload.actualList.filter((x: ILinks) => x.id != payload.id))
    );
  } catch (error: any) {
    yield put(getLinksFailure(error.message || "Something went wrong"));
  }
}

export default function* watchSaga() {
  yield takeEvery(GET_LINKS_REQUEST, _getLinks);
  yield takeEvery(CREATE_LINKS_REQUEST, _createLinks);
  yield takeEvery(DELETE_LINKS_REQUEST, _deleteLinks);
}
