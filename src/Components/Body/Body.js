import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import HOC from '../HOC/HOC'
import Home from './Home/Home'
import Featured from './Featured/Featured.js'

const Body = (props) => {
    return (
        <HOC>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="" component={} />
            </Switch>
        </HOC>        
    )
}

export default Body
