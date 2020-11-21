import React, { Component } from 'react'
import Project from './Project/Project.js'
import Axios from 'axios'
import Spinner from '../../UI/Spinner/Spinner'
import './Projects.css'
class Projects extends Component {

    state={
        repos: " ",
        spinner:true
    }

    componentDidMount=()=>{
        Axios.get('https://api.github.com/users/uniquemozilla22/repos').then(response=>{
            console.log(response);

            this.setState({
                ...this.state,
                repos:response.data,
                spinner:false
            })            
        })
    }

    render() {

        let github_printing=[]

        if(this.state.repos!==" ")
        {
            Object.keys(this.state.repos).map((key,index)=>{

                let repos= this.state.repos[index]
    
               return github_printing[index]=<Project name={repos.name} desc={repos.description} date={repos.created_at}  stars={repos.stargazers_count} forks={repos.forks_count} watch={repos.watchers_count} code={repos.language}></Project>;
    
            })  
    
        }
        else{
            github_printing[0]=<Spinner/>

        }       

        return (
         <div className="page-content">
                <div class="section-heading container-fluid">
                    <h1>Github<br/><em>Projects</em></h1>
                    <a href="https://github.com/uniquemozilla22/repositories"><h1><br/><em><i className="fa fa-github"></i>uniquemozilla22/repo</em></h1></a>
                </div>
                <hr/>
            <div className="container-fluid">
                <div class="github-cards container-fluid">
                    {github_printing}

                </div>
            </div>
        </div>
        )
    }
}

export default Projects