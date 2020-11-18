import React, { Component } from 'react'
import data from './sample.json'
import Project from './Project/Project.js'
import Axios from 'axios'

class Projects extends Component {

    state={
        repos:data
    }

    componentDidMount=()=>{
        Axios.get('https://api.github.com/users/uniquemozilla22/repos.json').then(response=>{
            console.log(response.data);

            this.setState({
                ...this.state,
                repos:this.response.data
            })
        })
    }

    render() {

        let project_printing=[]

        this.state.repos.map((key,index)=>{

            let repos= this.state.repos[index]

            project_printing[index]=<Project name={repos.name} desc={repos.description} date={repos.created_at} image={repos.avatar_url} stars={repos.stargazers_count} forks={repos.forks_count} watch={repos.watchers_count}></Project>;

        })
        

        return (
            <div className="page-content">
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