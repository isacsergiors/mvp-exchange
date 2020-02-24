import {combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export default combineReducers({

}, applyMiddleware(thunk))