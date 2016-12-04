import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import Actions from "./actions/index"

let finalCreateStore = compose(
    applyMiddleware(thunk,logger())
)(createStore)


export default function configureStore(initialState = {}) {
    return finalCreateStore(rootReducer, initialState)
}