import postsReducer from './postsReducer';
import singlePostReducer from './singlePostReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    posts: postsReducer,
    singlePost: singlePostReducer
});

export default rootReducer;