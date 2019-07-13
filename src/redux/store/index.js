import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import createSagaMiddleware from 'redux-saga'
import mySaga from '../sagas/postsSaga.js'

const sagaMiddleware = createSagaMiddleware()

const enhancer = applyMiddleware(sagaMiddleware)

const store = createStore(rootReducer, enhancer);
window.store = store;

sagaMiddleware.run(mySaga)

export default store;
