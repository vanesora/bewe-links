import '@testing-library/jest-dom';
import { IAction } from '../../../interfaces/global';
import signupReducer, {
  ISignupStateDuck,
  signupStart,
  signupPending,
  signupSuccess,
  signupFailure,
  signupCompleted,
  SIGNUP_REQUEST,
  SIGNUP_PENDING,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_COMPLETED,
} from './signup';

const initialStateTest: ISignupStateDuck = {
  errorMessage: '',
  errorCode: '',
  message: '',
  pending: false,
  success: false,
};

describe('ducks signup unit test', () => {

  test('signupStart unit test', () => {

    const payload = {};

    const receivedTest = {
      type: SIGNUP_REQUEST,
      payload: payload
    };

    const startTest = signupStart(payload);

    expect(startTest).toEqual(receivedTest);
  });


  test('signupPending unit test', () => {

    const receivedTest = {
      type: SIGNUP_PENDING
    };

    const pendingTest = signupPending();

    expect(pendingTest).toEqual(receivedTest);
  });


  test('signupSuccess unit test', () => {

    const payload = {
      status: "200"
    };

    const receivedTest = {
      type: SIGNUP_SUCCESS,
      payload: payload,
    };

    const succesTest = signupSuccess(payload);

    expect(succesTest).toEqual(receivedTest);
  });


  test('signupFailure unit test', () => {

    const receivedTest = {
      type: SIGNUP_FAILURE,
      payload: "error",
    };

    const errorTest = signupFailure('error');

    expect(errorTest).toEqual(receivedTest);
  });


  test('signupCompleted unit test', () => {

    const receivedTest = {
      type: SIGNUP_COMPLETED
    };

    const pendingTest = signupCompleted();

    expect(pendingTest).toEqual(receivedTest);
  });


  test('signupReducer, pending unit test', () => {

    const payloadTest: IAction = {
      type: SIGNUP_PENDING,
      payload: null
    }

    const receivedTest: ISignupStateDuck = {
      errorMessage: '',
      errorCode: '',
      message: '',
      pending: true,
      success: false,
    };

    const reducerTest = signupReducer(initialStateTest, payloadTest);

    expect(reducerTest).toEqual(receivedTest);
  });


  test('signupReducer, success unit test', () => {

    const payloadTest: IAction = {
      type: SIGNUP_SUCCESS,
      payload: 'signup success'
    }

    const receivedTest: ISignupStateDuck = {
      errorMessage: '',
      errorCode: '',
      message: undefined,
      pending: false,
      success: true,
    };

    const reducerTest = signupReducer(initialStateTest, payloadTest);

    expect(reducerTest).toEqual(receivedTest);
  });


  test('signupReducer, failure unit test', () => {

    const payloadTest: IAction = {
      type: SIGNUP_FAILURE,
      payload: 'error'
    }

    const receivedTest: ISignupStateDuck = {
      errorMessage: 'error',
      errorCode: '',
      message: '',
      pending: false,
      success: false,
    };

    const reducerTest = signupReducer(initialStateTest, payloadTest);

    expect(reducerTest).toEqual(receivedTest);
  });


  test('signupReducer, completed unit test', () => {

    const payloadTest: IAction = {
      type: SIGNUP_COMPLETED,
      payload: null
    }

    const receivedTest: ISignupStateDuck = {
      errorMessage: '',
      errorCode: '',
      message: '',
      pending: false,
      success: false,
    };

    const reducerTest = signupReducer(initialStateTest, payloadTest);

    expect(reducerTest).toEqual(receivedTest);
  });


  test('signupReducer, default unit test', () => {

    const payloadTest: IAction = {
      type: SIGNUP_REQUEST,
      payload: null
    }

    const receivedTest: ISignupStateDuck = {
      errorMessage: '',
      errorCode: '',
      message: '',
      pending: false,
      success: false,
    };

    const reducerTest = signupReducer(undefined, payloadTest);

    expect(reducerTest).toEqual(receivedTest);
  });

});