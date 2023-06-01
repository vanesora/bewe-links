import { IAction } from '../../../interfaces/global';

import logoutRedirectReducer, {
  ILogoutRedirectDuck,
  getLogoutRedirectStart,
  getLogoutRedirectPending,
  getLogoutRedirectSuccess,
  getLogoutRedirectFailure,
  GET_LOGOUT_REDIRECT_REQUEST,
  GET_LOGOUT_REDIRECT_PENDING,
  GET_LOGOUT_REDIRECT_SUCCESS,
  GET_LOGOUT_REDIRECT_FAILURE,
} from './logoutRedirect';

const initialState: ILogoutRedirectDuck = {
  errorMessage: '',
  pending: false,
  success: false,
  logoutRedirect: '/',
};

describe('User duck logoutRedirect', () => {
  it('getLogoutRedirectStart unit test', () => {
    const received = { type: GET_LOGOUT_REDIRECT_REQUEST };

    const startTest = getLogoutRedirectStart();

    expect(startTest).toEqual(received);
  });

  it('getLogoutRedirectPending unit test', () => {
    const received = { type: GET_LOGOUT_REDIRECT_PENDING };

    const startTest = getLogoutRedirectPending();

    expect(startTest).toEqual(received);
  });

  it('getLogoutRedirectSuccess unit test', () => {
    const payload: Array<any> = [];
    const received = { type: GET_LOGOUT_REDIRECT_SUCCESS, payload };

    const startTest = getLogoutRedirectSuccess(payload);

    expect(startTest).toEqual(received);
  });
  
  it('getLogoutRedirectFailure unit test', () => {
    const payload: string = 'payload';
    const received = { type: GET_LOGOUT_REDIRECT_FAILURE, payload };

    const startTest = getLogoutRedirectFailure(payload);

    expect(startTest).toEqual(received);
  });

  it('logoutRedirectReducer, GET_LOGOUT_REDIRECT_PENDING', () => {
    const actionTest: IAction = { type: GET_LOGOUT_REDIRECT_PENDING }

    const stateTest: ILogoutRedirectDuck = {
      ...initialState,
      success: false,
      pending: true,
    };

    const reducerTest = logoutRedirectReducer(stateTest, actionTest);

    expect(reducerTest).toEqual(stateTest);
  });

  it('logoutRedirectReducer, GET_LOGOUT_REDIRECT_SUCCESS', () => {
    const payload = '/';
    const actionTest: IAction = { type: GET_LOGOUT_REDIRECT_SUCCESS, payload }

    const stateTest: ILogoutRedirectDuck = {
      ...initialState,
      logoutRedirect: payload,
      success: true,
      pending: false,
    };

    const reducerTest = logoutRedirectReducer(stateTest, actionTest);

    expect(reducerTest).toEqual(stateTest);
  });

  it('logoutRedirectReducer, GET_LOGOUT_REDIRECT_FAILURE', () => {
    const actionTest: IAction = { type: GET_LOGOUT_REDIRECT_FAILURE }

    const stateTest: ILogoutRedirectDuck = {
      ...initialState,
      success: false,
      pending: false,
    };

    const reducerTest = logoutRedirectReducer(stateTest, actionTest);

    expect(reducerTest).toEqual(stateTest);
  });

  it('logoutRedirectReducer, default', () => {
    const actionTest: IAction = { type: 'default' }

    const stateTest: ILogoutRedirectDuck = {
      ...initialState,
    };

    const reducerTest = logoutRedirectReducer(stateTest, actionTest);

    expect(reducerTest).toEqual(initialState);
  });
});