import React from 'react'
import HOC from '../../HOC/HOC'
import './Home.css'
import Slider from './Slider/Slider'
const Home = () => {
    return (
        <HOC>
            <div class="slider">
                <div class="Modern-Slider content-section" id="top">
                    <Slider></Slider>
                </div>
            </div>
        </HOC>
    )
}




export default  Home;