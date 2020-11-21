import React, { Component } from 'react'
import HOC from '../HOC/HOC'
import './Navigation.css'
import { NavLink , Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <HOC>
				<header class="nav-down responsive-nav hidden-lg hidden-md">
                     <button type="button" id="nav-toggle" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <div id="main-nav" class="collapse navbar-collapse">
                <nav>
                    <ul class="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/project">Recent Project</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                        
                    </ul>
                </nav>
            </div>
        </header>
		<div class="sidebar-navigation hidde-sm hidden-xs">
            <div class="logo">
                <a href="#">Yogesh<em> B.</em></a>
            </div>
            
            <nav>
                <ul>
                <li><NavLink to="/" activeClassName='active-section' exact><span class="rect"></span>
                            <span class="circle"></span>Home</NavLink></li>
                        
                        <li><NavLink to="/project" activeClassName='active-section'><span class="rect"></span>
                            <span class="circle"></span>Recent Project</NavLink></li>
                        
                        <li><NavLink to="/blog" activeClassName='active-section'><span class="rect"></span>
                            <span class="circle"></span>Blog</NavLink></li>
                        
                        <li><NavLink to="/contact" activeClassName='active-section'><span class="rect"></span>
                            <span class="circle"></span>Contact</NavLink></li>
                 </ul>
            </nav>
            <ul class="social-icons">
                <li><a href="https://www.facebook.com/y0geshbhattarai/"><i class="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/UniqueBhattara9"><i class="fa fa-twitter"></i></a></li>
            </ul>
        </div>
            </HOC>
        )
    }
}


