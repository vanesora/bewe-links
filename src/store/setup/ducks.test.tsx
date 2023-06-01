import "@testing-library/jest-dom";
import { IAction } from "../../interfaces/global";
import { enSetup } from "../../data/dataEn";
import { esSetup } from "../../data/dataEs";
import setUpReducer, {
  ISetupState,
  setUp,
  setUpES,
  setUpEN,
  SETUP_ES,
  SETUP_EN,
} from "./ducks";

describe("store/setup unit test", () => {
  test("setUp unit test", () => {
    const receivedTest = {
      payload: "usSetup",
      type: "SETUP",
    };

    const startTest = setUp("usSetup");

    expect(startTest).toEqual(receivedTest);
  });

  test("setUpMX unit test", () => {
    const receivedTest = {
      type: SETUP_ES,
    };

    const startTest = setUpES();

    expect(startTest).toEqual(receivedTest);
  });

  test("setUpUS unit test", () => {
    const receivedTest = {
      type: SETUP_EN,
    };

    const startTest = setUpEN();

    expect(startTest).toEqual(receivedTest);
  });


  test('setUpReducer, esSetup unit test', () => {

    const payloadTest: IAction = {
      type: SETUP_ES,
      payload: null,
    };

    const initialStateTest: ISetupState = {
      currentTheme: esSetup.currentTheme,
      dateFormat: esSetup.dateFormat,
      screen: esSetup.screen,
      theme: esSetup.theme,
    };

    const reducerTest = setUpReducer(initialStateTest, payloadTest);

    expect(reducerTest).toEqual(esSetup);
  });

  test("setUpReducer, setUp unit test", () => {
    const payloadTest: IAction = {
      type: SETUP_EN,
      payload: null,
    };

    const initialStateTest: ISetupState = {
      currentTheme: enSetup.currentTheme,
      dateFormat: enSetup.dateFormat,
      screen: enSetup.screen,
      theme: enSetup.theme,
    };

    const reducerTest = setUpReducer(initialStateTest, payloadTest);

    expect(reducerTest).toEqual(enSetup);
  });

  test("setUpReducer, default unit test", () => {
    const payloadTest: IAction = {
      type: "ERROR",
      payload: null,
    };

    const reducerTest = setUpReducer(undefined, payloadTest);

    expect(reducerTest).toEqual(enSetup);
  });
});
