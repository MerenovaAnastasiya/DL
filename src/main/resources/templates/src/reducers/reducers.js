import {user} from './userReducer';
import {app} from './appReducer';
import {combineReducers} from "redux";

export default combineReducers({
    user,
    app
})