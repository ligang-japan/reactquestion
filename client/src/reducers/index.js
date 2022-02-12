import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import streamReducer from './streamReducer';
export default combineReducers({
    posts:postsReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});