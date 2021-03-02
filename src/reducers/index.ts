import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

// const rootReducer = {};
// export default rootReducer;

export default combineReducers({
  form: formReducer
});
