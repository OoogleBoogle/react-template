import { redux, createStore, applyMiddleware } from 'redux';
import { default as thunk } from 'redux-thunk';
import { changeTitle } from './reducers';

var store = createStore(changeTitle, applyMiddleware(thunk));

export default store;
