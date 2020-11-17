import React ,{Component} from 'react'
import HOC from '../../HOC/HOC'
import Axios from 'axios'
require ('../../../Assets/img/featured_1.jpg') 

 class Featured extends Component {

    constructor(props){
        super(props)
        this.state={
            'githublink':'https://api.github.com/users/uniquemozilla22/repos',
            'repos':''
        }
    }

    componentDidMount=()=>{
        Axios.get(this.state.githublink).then(response=>{
            console.log(response.data)
        })
    }
    render() {
        return (
            <HOC>
                <div class="page-content">
                <section id="featured" class="content-section">
                    <div class="section-heading">
                        <h1>Featured<br/><em>Places</em></h1>
                        <p>Praesent pellentesque efficitur magna, 
                        <br/>sed pellentesque neque malesuada vitae.</p>
                    </div>
                    <div class="section-content">
                        <div class="owl-carousel owl-theme">
                            <div class="item">
                                <div class="image">
                                    <img src='../../../Assets/img/featured_1.jpg' alt=""/>
                                    <div class="featured-button button">
                                        <a href="#projects">Visit Source</a>
                                    </div>
                                </div>
                                <div class="text-content">
                                    <h4>Lorem ipsum dolor</h4>
                                    <span>Proin et sapien</span>
                                    <p>#1 You are allowed to use Sentra Template for your business or client websites. You can use it for commercial or non-commercial or educational purposes.</p>
                                </div>
                                
                            </div>
                            <div class="item">
                                <div class="image">
                                    <img src="Assets/img/featured_2.jpg" alt=""/>
                                    <div class="featured-button button">
                                        <a href="#projects">Visit Source</a>
                                    </div>
                                </div>
                                <div class="text-content">
                                    <h4>Phasellus a lacus ac odio</h4>
                                    <span>Maximus</span>
                                    <p>#2 You are NOT allowed to re-distribute this on any template website. You <strong>can post</strong> a screenshot and a link back to original template page on your blog or site. Thank you.</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="image">
                                    <img src="Assets/img/featured_3.jpg" alt=""/>
                                    <div class="featured-button button">
                                        <a href="#projects">Visit Source</a>
                                    </div>
                                </div>
                                <div class="text-content">
                                    <h4>Proin sit amet fringilla</h4>
                                    <span>Vulputate</span>
                                    <p>#3 Aliquam mollis lacus eget metus efficitur lobortis. Suspendisse libero lacus, accumsan vitae commodo tristique, luctus gravida metus.</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="image">
                                    <img src="Assets/img/featured_2.jpg" alt=""/>
                                    <div class="featured-button button">
                                        <a href="#projects">Visit Source</a>
                                    </div>
                                </div>
                                <div class="text-content">
                                    <h4>In volutpat augue lectus</h4>
                                    <span>Elementum</span>
                                    <p>#4 Aliquam mollis lacus eget metus efficitur lobortis. Suspendisse libero lacus, accumsan vitae commodo tristique, luctus gravida metus.</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="image">
                                    <img src="Assets/img/featured_1.jpg" alt=""/>
                                    <div class="featured-button button">
                                        <a href="#projects">Visit Source</a>
                                    </div>
                                </div>
                                <div class="text-content">
                                    <h4>Cras commodo odio</h4>
                                    <span>Aliquam</span>
                                    <p>#5 Mauris lacinia pretium libero, ut tincidunt lacus molestie ornare. Phasellus a facilisis erat. Praesent eleifend nibh mauris, quis sodales lorem convallis pulvinar.</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="image">
                                    <img src="Assets/img/featured_3.jpg" alt=""/>
                                    <div class="featured-button button">
                                        <a href="#projects">Visit Source</a>
                                    </div>
                                </div>
                                <div class="text-content">
                                    <h4>Sed at massa turpis</h4>
                                    <span>Curabitur</span>
                                    <p>#6 Vestibulum tincidunt ornare ligula vel molestie. Curabitur hendrerit mauris mollis ipsum vulputate rutrum. Phasellus luctus odio eget dui imperdiet.</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="image">
                                    <img src="Assets/img/featured_2.jpg" alt=""/>
                                    <div class="featured-button button">
                                        <a href="#projects">Visit Source</a>
                                    </div>
                                </div>
                                <div class="text-content">
                                    <h4>Aliquam mollis lacus</h4>
                                    <span>Suspendisse</span>
                                    <p>#7 Suspendisse suscipit nulla sed nisl fermentum, auctor suscipit nunc rhoncus. Proin faucibus metus diam, nec hendrerit purus pharetra in.</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="image">
                                    <img src="Assets/img/featured_1.jpg" alt=""/>
                                    <div class="featured-button button">
                                        <a href="#projects">Visit Source</a>
                                    </div>
                                </div>
                                <div class="text-content">
                                    <h4>Mauris lacinia pretium</h4>
                                    <span>Vestibulum</span>
                                    <p>#8 Suspendisse suscipit nulla sed nisl fermentum, auctor suscipit nunc rhoncus. Proin faucibus metus diam, nec hendrerit purus pharetra in.</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="image">
                                    <img src="Assets/img/featured_3.jpg" alt=""/>
                                    <div class="featured-button button">
                                        <a href="#projects">Visit Source</a>
                                    </div>
                                </div>
                                <div class="text-content">
                                    <h4>Proin sit amet fringilla erat</h4>
                                    <span>Convallis</span>
                                    <p>#9 Suspendisse suscipit nulla sed nisl fermentum, auctor suscipit nunc rhoncus. Proin faucibus metus diam, nec hendrerit purus pharetra in.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </HOC>
        )
    }
}


export default Featured
