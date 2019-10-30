import React from "react";

export default class Contacts extends React.Component{
    render(){
        return (
            <section id="contact" className="contact-area pt-125 pb-130 gray-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center pb-25">
                                <h2 className="title">Get In Touch</h2>
                                <p>for important things, let me know it via email</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-7">
                            <div className="contact-box text-center mt-30">
                                <div className="contact-icon">
                                    <i className="lni-map-marker"></i>
                                </div>
                                <div className="contact-content">
                                    <h6 className="contact-title">Address</h6>
                                    <p>Masangan Wetan, Sukodono, Sidoarjo</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-7">
                            <div className="contact-box text-center mt-30">
                                <div className="contact-icon">
                                    <i className="lni-phone"></i>
                                </div>
                                <div className="contact-content">
                                    <h6 className="contact-title">Phone</h6>
                                    <p>(+62)878 6422 6576</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-7">
                            <div className="contact-box text-center mt-30">
                                <div className="contact-icon">
                                    <i className="lni-envelope"></i>
                                </div>
                                <div className="contact-content">
                                    <h6 className="contact-title">Email</h6>
                                    <p>arisandyrico@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-form pt-30">
                                <form id="contact-form" action="assets/contact.php">
                                    <div className="single-form">
                                        <input type="text" name="name" placeholder="Name"/>
                                    </div>
                                    <div className="single-form">
                                        <input type="email" name="email" placeholder="Email"/>
                                    </div>
                                    <div className="single-form">
                                        <textarea name="message" placeholder="Message"></textarea>
b                                    <p className="form-message"></p>
                                    <div className="single-form">
                                        <button className="main-btn" type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-map mt-60">
                                <div className="gmap_canvas">                            
                                    
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        );
    }
}