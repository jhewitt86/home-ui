import { combineReducers } from "redux";
import ConversationReducer from "feature/screens/conversations/duck";
import LoginReducer from "feature/screens/login/duck";

const rootReducer = combineReducers({
  conversations: ConversationReducer,
  token: LoginReducer
});

export default rootReducer;
