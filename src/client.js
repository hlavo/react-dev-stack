import React from "react"
import ReactDOM from "react-dom"
import {Provider} from 'react-redux'
import configureStore from './redux/store'
import App from './app'

const app = document.getElementById('app')

let initialState = {

};

let store = configureStore(initialState)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    app);