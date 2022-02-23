import {applyMiddleware, createStore} from 'redux';
import postsReducer from "./posts/postsReducer";
import thunkMiddleware from "redux-thunk"

let store = createStore(postsReducer, applyMiddleware(thunkMiddleware));

export default store;