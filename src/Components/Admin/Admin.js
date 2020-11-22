import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HOC from '../HOC/HOC'
import Login from './Login/Login'
import Dashboard from './Dashboard/Dashboard'

 class Admin extends Component {
    render() {
        return (
            <HOC>
                <div className="page-content">
                <Switch>
                    <Route path="/admin/login" component={Login}></Route>
                    <Route path="/admin/dashboard" component={Dashboard}></Route>
                </Switch>
                </div>

            </HOC>
        )
    }
}

export default Admin
