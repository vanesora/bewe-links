import '@testing-library/jest-dom';
import { takeEvery } from 'redux-saga/effects';
import { IAction } from '../../interfaces/global';
import { SETUP } from './ducks';
import watchSaga, { setUp } from './sagas';

describe('store/setup unit test', () => {

  test('watchSaga unit test', () => {

    const watchSagaTest = watchSaga();

    expect(watchSagaTest.next().value).toEqual(takeEvery(SETUP, setUp));
  });

  test('setUp, usSetup unit test', () => {

    const receivedTest = {
      '@@redux-saga/IO': true,
      combinator: false,
      type: 'PUT',
      payload: { channel: undefined as any, action: { type: 'SETUP_EN' } }
    };

    const localization: IAction = {
      type: 'SETUP',
      payload: 'usSetup'
    };

    const setUpTest = setUp(localization);
 
    expect(setUpTest.next().value).toEqual(receivedTest);
    expect(setUpTest.next().done).toBeTruthy();
  });

  test('setUp, esSetup unit test', () => {

    const receivedTest = {
      '@@redux-saga/IO': true,
      combinator: false,
      type: 'PUT',
      payload: { channel: undefined as any, action: { type: 'SETUP_ES' } }
    };

    const localization: IAction = {
      type: 'SETUP',
      payload: 'esSetup'
    };

    const setUpTest = setUp(localization);
 
    expect(setUpTest.next().value).toEqual(receivedTest);
    expect(setUpTest.next().done).toBeTruthy();
  });

});