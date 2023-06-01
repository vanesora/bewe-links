import { combineReducers } from "redux";
import loggedInReducer from "../navigation/ducks/ducks";
import setUpReducer from "./setup/ducks";
import loginReducer from "../screens/Login/ducks/login";
import signupReducer from "../screens/Signup/ducks/signup";
import logoutReducer from "../screens/Login/ducks/logout";

const rootReducer = combineReducers({
  loggedIn: loggedInReducer,
  setup: setUpReducer,
  login: loginReducer,
  signup: signupReducer,
  logout: logoutReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
