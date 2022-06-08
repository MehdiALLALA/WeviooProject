import { combineReducers } from 'redux';
import  postReducer  from './postReducer';
import tagReducer from './tagReducer';
import userReducer from './userReducer';

export default combineReducers({
    post: postReducer,
    user: userReducer,
    tag: tagReducer
});