import React from "react"
import ReactDOM from "react-dom"
import {connect} from "react-redux"
import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router'
import Homepage from "./containers/Home/Home.jsx"
import Layout from './layout/layout.jsx'
import config from './config'

export default class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path={config.host} component={Layout}>
                    <IndexRoute  component={Homepage}></IndexRoute>
                </Route>
            </Router>
        )
    }
}