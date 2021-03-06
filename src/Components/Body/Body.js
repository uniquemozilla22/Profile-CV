import React from 'react'
import { Route, Switch, } from 'react-router-dom'
import HOC from '../HOC/HOC'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import Projects from './Projects/Projects.js'
import Blog from './Blog/Blog.js'
import Admin from '../Admin/Admin'

const Body = (props) => {
    return (
        <HOC>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/project" component={Projects} />
                <Route path="/blog" component={Blog}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/admin" component={Admin}/>
            </Switch>
        </HOC>        
    )
}

export default Body
