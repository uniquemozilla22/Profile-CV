import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HOC from '../HOC/HOC'
import Home from './Home/Home'

const Body = (props) => {
    return (
        <HOC>
            <Home/>
        </HOC>
        
    )
}

export default Body
