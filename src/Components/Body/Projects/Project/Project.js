import React from 'react'
import './Project.css'



const Project = (props) => {

  let image="https://dl2.tut4dev.ir/files/1152/banner.png?dshadow.Angle=0&dshadow.Distance=0&dshadow.Opacity=70&dshadow.Color=Black&dshadow.Softness=10&width=300&height=200&mode=boxpad&colorfulbg=true"

  if(!props.image)
  {
    image=props.image
  }
  
    return (
        <div className="col-4">
             <li class="booking-card" style={{'backgroundImage':"url("+image+")"}}>
             <div class="book-container">
      <div class="content">
        <a href={"https://www.github.com/uniquemozilla22/"+props.link} class="btn">Visit Repo</a>
      </div>
    </div>
    <div class="informations-container">
      <h2 class="title"><a href={"https://www.github.com/uniquemozilla22/"+props.link}>{props.name}</a></h2>
      <p class="sub-title">{props.desc}</p>
      <p class="price">{props.date}</p>
      <div class="more-information">
        <div class="info-and-date-container">
          <div class="box info">
          <i class="fa fa-star fa-2x"></i>
            <p>{props.stars}</p>
          </div>
          <div class="box info">
          <i class="fa fa-code-fork fa-2x"></i>            
            <p>{props.forks}</p>
          </div>
          
          <div class="box date">
          <i class="fa fa-eye fa-2x"></i>            
            <p>{props.watch}</p>
          </div>
        </div>
        </div>
    </div>
    
  </li>
        </div>
    )
}

export default Project
