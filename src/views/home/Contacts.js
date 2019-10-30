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
                                <p>Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis quis leo.</p>
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
                                    <p>123 Stree New York City , United States Of America 750</p>
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
                                    <p>+931 2222 5555</p>
                                    <p>+547 5554 6663</p>
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
                                    <p>support@yourmail.com</p>
                                    <p>info@helpline.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
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
                                    </div>
                                    <p className="form-message"></p>
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
                    </div>
                </div>
            </section>
        );
    }
}