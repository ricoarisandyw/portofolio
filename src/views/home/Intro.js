import React from 'react';

export default class Intro extends React.Component{
    render(){
        return (
            <div id="parallax home" className="header-content d-flex align-items-center">
                <div className="header-shape shape-one layer" data-depth="0.10">
                    <img src="assets/images/banner/shape/shape-1.png" alt="Shape"/>
                </div> 
                <div className="header-shape shape-tow layer" data-depth="0.30">
                    <img src="assets/images/banner/shape/shape-2.png" alt="Shape"/>
                </div> 
                <div className="header-shape shape-three layer" data-depth="0.40">
                    <img src="assets/images/banner/shape/shape-3.png" alt="Shape"/>
                </div> 
                <div className="header-shape shape-fore layer" data-depth="0.60">
                    <img src="assets/images/banner/shape/shape-2.png" alt="Shape"/>
                </div> 
                <div className="header-shape shape-five layer" data-depth="0.20">
                    <img src="assets/images/banner/shape/shape-1.png" alt="Shape"/>
                </div> 
                <div className="header-shape shape-six layer" data-depth="0.15">
                    <img src="assets/images/banner/shape/shape-4.png" alt="Shape"/>
                </div> 
                <div className="header-shape shape-seven layer" data-depth="0.50">
                    <img src="assets/images/banner/shape/shape-5.png" alt="Shape"/>
                </div> 
                <div className="header-shape shape-eight layer" data-depth="0.40">
                    <img src="assets/images/banner/shape/shape-3.png" alt="Shape"/>
                </div> 
                <div className="header-shape shape-nine layer" data-depth="0.20">
                    <img src="assets/images/banner/shape/shape-6.png" alt="Shape"/>
                </div> 
                <div className="header-shape shape-ten layer" data-depth="0.30">
                    <img src="assets/images/banner/shape/shape-3.png" alt="Shape"/>
                </div> 
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="header-content-right">
                                <h4 className="sub-title">Hello, I’m</h4>
                                <h1 className="title">RICO WIJAYA</h1>
                                <p>A Freelance Frontend(Web & Mobile) Developer</p>
                                <a className="main-btn" href="#work">View my Work</a>
                            </div> 
                        </div>
                        <div className="col-lg-6 offset-xl-1">
                            <div className="header-image d-none d-lg-block">
                                <img src="assets/images/rico-34.jpg" alt="hero"/>
                            </div> 
                        </div>
                    </div> 
                </div> 
                <div className="header-social">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-social-icon">
                                    <ul>
                                        <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                                        <li><a href="#"><i className="lni-twitter-original"></i></a></li>
                                        <li><a href="#"><i className="lni-behance-original"></i></a></li>
                                        <li><a href="#"><i className="lni-linkedin-original"></i></a></li>
                                    </ul>
                                </div> 
                            </div>
                        </div> 
                    </div> 
                </div> 
            </div>
        );
    }
}