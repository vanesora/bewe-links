import { combineReducers } from "redux";
import loggedInReducer from "../navigation/ducks/ducks";
import setUpReducer from "./setup/ducks";
import loginReducer from "../screens/Login/ducks/login";

const rootReducer = combineReducers({
  loggedIn: loggedInReducer,
  setup: setUpReducer,
  login: loginReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
