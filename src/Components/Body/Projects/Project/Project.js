import React from 'react'
import './Project.css'



const Project = (props) => {

  let image="https://pngimg.com/uploads/github/github_PNG40.png"

  
    return (
        <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-4">
             <a href={"https://www.github.com/uniquemozilla22/"+props.name} class="github-card" data-github="Nexmo/nexmo-java">
    <h3>{props.name}</h3> <span class="github-card__meta">
      <i class="fa fa-day" aria-hidden="true"></i>
      <span data-forks>
        {props.date}
      </span>
    </span>
    <p>{props.desc}</p>
    <span class="github-card__meta">
      <span class="github-card__language-icon" >●</span> {props.code}
    </span>
    <span class="github-card__meta">
      <i class="fa fa-star" aria-hidden="true"></i>
      <span data-stars>
        {props.stars}
      </span>
    </span>
    <span class="github-card__meta">
      <i class="fa fa-code-fork" aria-hidden="true"></i>
      <span data-forks>
        {props.forks}
      </span>
    </span>
    <span class="github-card__meta">
      <i class="fa fa-eye" aria-hidden="true"></i>
      <span data-forks>
        {props.watch}
      </span>
    </span>
    
  </a>
        </div>
    )
}

export default Project
