import '@testing-library/jest-dom';
import { IAction } from '../../interfaces/global';
import pathReducer, {
  getPathFailure, getPathPending,
  getPathStart, getPathSuccess, GET_SCHEMA_PATH_FAILURE, 
  GET_SCHEMA_PATH_PENDING, GET_SCHEMA_PATH_REQUEST, GET_SCHEMA_PATH_SUCCESS, IPath
} from '../ducks/ducks';


const initialStateTest: IPath = {
  errorMessage: '',
  errorCode: '',
  message: '',
  pending: false,
  success: false,
  path: '/'
};

describe('ducks pathSchema unit test', () => {

  test('pathRequest unit test', () => {

    const receivedTest = {
      type: GET_SCHEMA_PATH_REQUEST,
    };

    const startTest = getPathStart();

    expect(startTest).toEqual(receivedTest);
  });


  test('pathPending unit test', () => {

    const receivedTest = {
      type: GET_SCHEMA_PATH_PENDING
    };

    const pendingTest = getPathPending();

    expect(pendingTest).toEqual(receivedTest);
  });


  test('pathSchemaInitSuccess unit test', () => {

    const payload = '/';

    const receivedTest = {
      type: GET_SCHEMA_PATH_SUCCESS,
      payload: payload,
    };

    const succesTest = getPathSuccess(payload);

    expect(succesTest).toEqual(receivedTest);
  });


  test('pathSchemaInitFailure unit test', () => {

    const payload = {
      errorMessage: 'error',
      errorCode: '',
      message: ''
    }

    const receivedTest = {
      type: GET_SCHEMA_PATH_FAILURE,
      payload: {
        errorMessage: 'error',
        errorCode: '',
        message: ''
      },
    };

    const errorTest = getPathFailure(payload);

    expect(errorTest).toEqual(receivedTest);
  });


  test('pathReducer, pending unit test', () => {

    const payloadTest: IAction = {
      type: GET_SCHEMA_PATH_PENDING,
      payload: null
    }

    const receivedTest: IPath = {
      path: '/',
      errorMessage: '',
      errorCode: '',
      message: '',
      pending: true,
      success: false,
    };

    const reducerTest = pathReducer(initialStateTest, payloadTest);

    expect(reducerTest).toEqual(receivedTest);
  });


  test('pathReducer, failure unit test', () => {

    const payloadTest: IAction = {
      type: GET_SCHEMA_PATH_FAILURE,
      payload: 'error',
    }

    const receivedTest: IPath = {
      path: '/',
      errorMessage: 'error',
      errorCode: '',
      message: '',
      pending: false,
      success: false,
    };

    const reducerTest = pathReducer(initialStateTest, payloadTest);

    expect(reducerTest).toEqual(receivedTest);
  });


  test('pathReducer, success unit test', () => {

    const payloadTest: IAction = {
      type: GET_SCHEMA_PATH_SUCCESS,
      payload: '/'
    }

    const receivedTest: IPath = {
      path: '/',
      errorMessage: '',
      errorCode: '',
      message: '',
      pending: false,
      success: true,
    };

    const reducerTest = pathReducer(initialStateTest, payloadTest);

    expect(reducerTest).toEqual(receivedTest);
  });


  test('pathReducer, default unit test', () => {

    const payloadTest: IAction = {
      type: GET_SCHEMA_PATH_REQUEST,
      payload: '/'
    }

    const receivedTest: IPath = {
      path: '/',
      errorMessage: '',
      errorCode: '',
      message: '',
      pending: false,
      success: false,
    };

    const reducerTest = pathReducer(undefined, payloadTest);

    expect(reducerTest).toEqual(receivedTest);
  });

}); 