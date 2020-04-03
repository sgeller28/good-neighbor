// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';
import AuthReducer from './auth-reducer';
import PostReducer from './post-reducer';

const rootReducer = combineReducers({
  post: PostReducer,
  auth: AuthReducer,
});

export default rootReducer;
