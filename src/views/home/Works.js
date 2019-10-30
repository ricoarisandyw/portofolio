import React from 'react';
import Propose from './Propose';

export default class Works extends React.Component {
    render(){
        console.log("__works : render");
        return (
            <div>
                <section id="work" className="work-area pt-125 pb-130">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="section-title pb-25">
                                    <h2 className="title">My Recent Works</h2>
                                    <p>Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis quis leo.</p>
                                </div> 
                            </div>
                        </div> 
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-work text-center mt-30">
                                    <div className="work-image">
                                        <img src="assets/images/work/w-1.jpg" alt="work"/>
                                    </div>
                                    <div className="work-overlay">
                                        <div className="work-content">
                                            <h3 className="work-title">Product Design</h3>
                                            <ul>
                                                <li><a className="image-popup" href="assets/images/work/w-1.jpg"><i className="lni-plus"></i></a></li>
                                                <li><a href="#"><i className="lni-link"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-work text-center mt-30">
                                    <div className="work-image">
                                        <img src="assets/images/work/w-2.jpg" alt="work"/>
                                    </div>
                                    <div className="work-overlay">
                                        <div className="work-content">
                                            <h3 className="work-title">Product Design</h3>
                                            <ul>
                                                <li><a className="image-popup" href="assets/images/work/w-2.jpg"><i className="lni-plus"></i></a></li>
                                                <li><a href="#"><i className="lni-link"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-work text-center mt-30">
                                    <div className="work-image">
                                        <img src="assets/images/work/w-3.jpg" alt="work"/>
                                    </div>
                                    <div className="work-overlay">
                                        <div className="work-content">
                                            <h3 className="work-title">Product Design</h3>
                                            <ul>
                                                <li><a className="image-popup" href="assets/images/work/w-3.jpg"><i className="lni-plus"></i></a></li>
                                                <li><a href="#"><i className="lni-link"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-work text-center mt-30">
                                    <div className="work-image">
                                        <img src="assets/images/work/w-4.jpg" alt="work"/>
                                    </div>
                                    <div className="work-overlay">
                                        <div className="work-content">
                                            <h3 className="work-title">Product Design</h3>
                                            <ul>
                                                <li><a className="image-popup" href="assets/images/work/w-4.jpg"><i className="lni-plus"></i></a></li>
                                                <li><a href="#"><i className="lni-link"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-work text-center mt-30">
                                    <div className="work-image">
                                        <img src="assets/images/work/w-5.jpg" alt="work"/>
                                    </div>
                                    <div className="work-overlay">
                                        <div className="work-content">
                                            <h3 className="work-title">Product Design</h3>
                                            <ul>
                                                <li><a className="image-popup" href="assets/images/work/w-5.jpg"><i className="lni-plus"></i></a></li>
                                                <li><a href="#"><i className="lni-link"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-work text-center mt-30">
                                    <div className="work-image">
                                        <img src="assets/images/work/w-6.jpg" alt="work"/>
                                    </div>
                                    <div className="work-overlay">
                                        <div className="work-content">
                                            <h3 className="work-title">Product Design</h3>
                                            <ul>
                                                <li><a className="image-popup" href="assets/images/work/w-6.jpg"><i className="lni-plus"></i></a></li>
                                                <li><a href="#"><i className="lni-link"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="work-more text-center mt-50">
                                    <a className="main-btn" href="#">more works</a>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </section>
                <Propose />
            </div>
        );
    }
}