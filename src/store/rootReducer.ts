import { combineReducers } from "redux";
import pathReducer from "../navigation/ducks/ducks";
import setUpReducer from "./setup/ducks";

const rootReducer = combineReducers({
  pathActual: pathReducer,
  setup: setUpReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
