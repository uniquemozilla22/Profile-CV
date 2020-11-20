import React, { Component } from 'react'
import Project from './Project/Project.js'
import Axios from 'axios'
import Spinner from '../../UI/Spinner/Spinner'

class Projects extends Component {

    state={
        repos:{
        },
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

        let project_printing=this.state.spinner?<Spinner/>:[]

        

        Object.keys(this.state.repos).map((key,index)=>{

            let repos= this.state.repos[index]

           return project_printing[index]=<Project name={repos.name} desc={repos.description} date={repos.created_at} image={repos.avatar_url} stars={repos.stargazers_count} forks={repos.forks_count} watch={repos.watchers_count}></Project>;

        })  

        

        

        return (
            <div class="page-content">
                <section id="projects" class="content-section">
                <div class="section-heading">
                    <h1>Recent<br/><em>Projects</em></h1>
                    <h1><a href="https://github.com/uniquemozilla22"><i class="fa fa-github"></i>uniquemozilla22/repos</a></h1>
                    </div>
                <div class="section-content">
                    <div class="container">
                        <ul>                            
                            {project_printing}
                        </ul>
                    </div>
                </div>            
            </section>
                
            </div>
        )
    }
}

export default Projects