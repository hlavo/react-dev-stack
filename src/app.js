import React from "react"
import ReactDOM from "react-dom"
import {connect} from "react-redux"
import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router'
import Homepage from "./containers/Home/Home.jsx"
import Notfound from "./containers/Notfound/Notfound.jsx"
import Registration from "./containers/Registration/Registration.jsx"
import Layout from './layout/layout.jsx'
import config from './config'

export default class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path={config.host} component={Layout}>
                    <IndexRoute  component={Homepage}></IndexRoute>
                    <Route path="/registration" component={Registration} />
                    <Route path="*" component={Notfound} />
                </Route>
            </Router>
        )
    }
}