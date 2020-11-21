import React from 'react'
import HOC from '../../../HOC/HOC'
import { Link } from 'react-router-dom'


const Slider=() =>{
    return (
        <HOC>
                <div class="item item-1">
        <div class="img-fill">
        <div class="image"></div>
        <div class=" info">
            <div>
              <h1>Yogesh Bhattarai<br/></h1>
              <p> <span className="point">Web Developer / UI UX Designer
                </span> 
                  </p>
              <div class="github white-button">
                  
                  <a href="https://www.github.com/uniquemozilla22"><i class="fa fa-github"></i> Github</a>
                  
                  <Link to="https://www.github.com/uniquemozilla22"><i class="fa fa-address-book"></i> View Resume</Link>

              </div>
              
            </div>
            </div>
        </div>
    </div>

        </HOC>
    )
}

export default Slider
