import React from 'react';

export default class Service extends React.Component {
    render(){
        return (
            <section id="service" className="services-area gray-bg pt-125 pb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center pb-30">
                                <h2 className="title">My Services</h2>
                                <p>Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis quis leo.</p>
                            </div> 
                        </div>
                    </div> 
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="single-service text-center mt-30">
                                <div className="service-icon">
                                    <i className="lni-code-alt"></i>
                                </div>
                                <div className="service-content">
                                    <h4 className="service-title"><a href="#">Web Design</a></h4>
                                    <p>Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.</p>
                                </div>
                            </div> 
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="single-service text-center mt-30">
                                <div className="service-icon">
                                    <i className="lni-color-pallet"></i>
                                </div>
                                <div className="service-content">
                                    <h4 className="service-title"><a href="#contact">Graphic Design</a></h4>
                                    <p>Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.</p>
                                </div>
                            </div> 
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="single-service text-center mt-30">
                                <div className="service-icon">
                                    <i className="lni-mobile"></i>
                                </div>
                                <div className="service-content">
                                    <h4 className="service-title"><a href="#">App Design</a></h4>
                                    <p>Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.</p>
                                </div>
                            </div> 
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="single-service text-center mt-30">
                                <div className="service-icon">
                                    <i className="lni-vector"></i>
                                </div>
                                <div className="service-content">
                                    <h4 className="service-title"><a href="#">Illustration Design</a></h4>
                                    <p>Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.</p>
                                </div>
                            </div> 
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="single-service text-center mt-30">
                                <div className="service-icon">
                                    <i className="lni-website"></i>
                                </div>
                                <div className="service-content">
                                    <h4 className="service-title"><a href="#">Web Development</a></h4>
                                    <p>Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="single-service text-center mt-30">
                                <div className="service-icon">
                                    <i className="lni-support"></i>
                                </div>
                                <div className="service-content">
                                    <h4 className="service-title"><a href="#">Consultancy and Support</a></h4>
                                    <p>Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.</p>
                                </div>
                            </div> 
                        </div>
                    </div> 
                </div>
            </section>
        );
    }
}