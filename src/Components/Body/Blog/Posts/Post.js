import React from 'react'
import HOC from '../../../HOC/HOC'

const Post = (props) => {
    return (
        <HOC>
            <li>
                <div class="item">
                    <img src={props.image} alt=""/>
                    <div class="text-content">
                        <h4>{props.heading}</h4>
                        <span>{props.date}</span>
                        <p>{props.desc}</p>                                                    
                        <div class="accent-button button">
                             <a href="#contact">Continue Reading</a>
                        </div>
                    </div>
                </div>
            </li>
        </HOC>
    )
}

export default Post
