import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'
import Actions from "./actions/index"
import { composeWithDevTools } from 'redux-devtools-extension';



let finalCreateStore = composeWithDevTools(
    applyMiddleware(thunk)
)(createStore)


export default function configureStore(initialState = {}) {
    return finalCreateStore(rootReducer, initialState)
}