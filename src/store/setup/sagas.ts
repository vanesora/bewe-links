import { takeEvery, put } from 'redux-saga/effects';
import { IAction } from '../../interfaces/global';
import { SETUP, setUpES, setUpEN } from './ducks';

export function* setUp({ payload }: IAction) {
  switch(payload){
      case 'usSetup': 
        yield put(setUpEN());
        return
      case 'esSetup': 
        yield put(setUpES());
        return
  }
};

export default function* watchSaga() {
  yield takeEvery(SETUP, setUp);
};