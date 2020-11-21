import React from 'react'
import HOC from '../../HOC/HOC'
import image1 from '../../../Assets/img/blog_1.jpg'
import Post from './Posts/Post'

const Blog = () => {
    return (
        <HOC>
            <div class="page-content">
            <section id="blog" class="content-section">
                <div class="section-heading">
                    <h1>Blog<br/><em>Entries</em></h1>
                    <p><em>The one place where I can be free to express myself</em>
                    <br/>About: Websites, UI , Code , Programming and Design</p>
                </div>
                <div class="section-content">
                    <div class="tabs-content">
                        <div class="wrapper">                            
                            <section id="first-tab-group" class="tabgroup">
                                <div id="tab1">
                                    <ul>
                                    <Post image={image1} heading="This is my first blog" desc="This is the first post in my blog so i am going to write something about coding and things that are helping me to inspire myself. I am a 21 year old boy just trying to live the dreams of the dreamers by working hard as possible." date={new Date().getFullYear()}/>                                        
                                    <Post image={image1} heading="This is my first blog" desc="This is the first post in my blog so i am going to write something about coding and things that are helping me to inspire myself. I am a 21 year old boy just trying to live the dreams of the dreamers by working hard as possible." date={new Date().getFullYear()}/>                                        
                                        <Post image={image1} heading="This is my first blog" desc="This is the first post in my blog so i am going to write something about coding and things that are helping me to inspire myself. I am a 21 year old boy just trying to live the dreams of the dreamers by working hard as possible." date={new Date().getFullYear()}/>                                        
                                    </ul>
                                </div>
                             </section> 
                        </div>
                    </div>
                </div>
            </section>          
            </div>
        </HOC>
    )
}

export default Blog
