import React from 'react'
import HOC from '../../../HOC/HOC'

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
                  
                  <Link to="https://www.github.com/uniquemozilla22"><i class="ion-social-github"></i>Github</Link>
                  
                  <Link to="https://www.github.com/uniquemozilla22"><i class="ion-social-github"></i>View Resume</Link>

              </div>
              <div class="github white-button">
                  
              </div>
            </div>
            </div>
        </div>
    </div>

        </HOC>
    )
}

export default Slider
