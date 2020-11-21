import React from 'react'
import HOC from '../../HOC/HOC'

const Contact = (props) => {
    return (
        <HOC>
            <div class="page-content">
                <section id="contact" class="content-section">
                <div id="map">  
                    <iframe title ="Location to come visit me" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7066.069580993468!2d85.32533357525209!3d27.685319581203977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bed80297ef%3A0xa88f57446083f344!2sBuddhanagar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1605686758572!5m2!1sen!2snp " width="100%" height="200px" frameborder="0" style={{"border ":"0"}} allowfullscreen></iframe>
                </div>
                <div id="contact-content">
                    <div class="section-heading">
                        <h1>Contact<br/><em>Yogesh  </em></h1>
                        <p>You can visit my on my socials 
                        <br/><em>Or Leave me a message </em></p>
                        
                    </div>
                    <div class="section-content">
                        <form id="contact" action="#" method="post">
                            <div class="row">
                                <div class="col-md-4">
                                  <fieldset>
                                    <input name="name" type="text" class="form-control" id="name" placeholder="Your name..." required=""/>
                                  </fieldset>
                                </div>
                                <div class="col-md-4">
                                  <fieldset>
                                    <input name="email" type="email" class="form-control" id="email" placeholder="Your email..." required=""/>
                                  </fieldset>
                                </div>
                                 <div class="col-md-4">
                                  <fieldset>
                                    <input name="subject" type="text" class="form-control" id="subject" placeholder="Subject..." required=""/>
                                  </fieldset>
                                </div>
                                <div class="col-md-12">
                                  <fieldset>
                                    <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your message..." required=""></textarea>
                                  </fieldset>
                                </div>
                                <div class="col-md-12">
                                  <fieldset>
                                    <button type="submit" id="form-submit" class="btn">Send Message Now</button>
                                  </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            </div>
        </HOC>
    )
}

export default Contact
