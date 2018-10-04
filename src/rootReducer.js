import { combineReducers } from "redux";
import ConversationReducer from "feature/screens/conversations/duck";

const rootReducer = combineReducers({
  conversations: ConversationReducer
});

export default rootReducer;
