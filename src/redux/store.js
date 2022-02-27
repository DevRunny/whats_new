import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import postsReducer from "./posts/postsReducer";
import feedbackReducer from "./feedback/feedbackReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  feedback: feedbackReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
