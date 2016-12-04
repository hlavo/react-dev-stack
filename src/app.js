import React from "react"
import ReactDOM from "react-dom"
import {connect} from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import Homepage from "./containers/Home/Home.jsx"
import Layout from './layout/layout.jsx'

export default class App extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path='/' component={Layout}>
                    <IndexRoute  component={Homepage}></IndexRoute>
                </Route>
            </Router>
        )
    }
}