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
                                <p>Satisfaction and Implemented is number 1 for me</p>
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
                                    <h4 className="service-title"><a href="#">Frontend Developer</a></h4>
                                    <p>laravel, yii2, flask jinja, reactjs, angularjs, scss/sass</p>
                                </div>
                            </div> 
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="single-service text-center mt-30">
                                <div className="service-icon">
                                    <i className="lni-vector"></i>
                                </div>
                                <div className="service-content">
                                    <h4 className="service-title"><a href="#contact">Backend Developer</a></h4>
                                    <p>laravel, spring, express, flask</p>
                                </div>
                            </div> 
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="single-service text-center mt-30">
                                <div className="service-icon">
                                    <i className="lni-mobile"></i>
                                </div>
                                <div className="service-content">
                                    <h4 className="service-title"><a href="#">App Developer</a></h4>
                                    <p>android native, react native, flutter, ionic</p>
                                </div>
                            </div> 
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="single-service text-center mt-30">
                                <div className="service-icon">
                                    <i className="lni-color-pallet"></i>
                                </div>
                                <div className="service-content">
                                    <h4 className="service-title"><a href="#">Art</a></h4>
                                    <p>photoshop, corel draw,fl studio, openshot/premiere</p>
                                </div>
                            </div> 
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="single-service text-center mt-30">
                                <div className="service-icon">
                                    <i className="lni-website"></i>
                                </div>
                                <div className="service-content">
                                    <h4 className="service-title"><a href="#">Database</a></h4>
                                    <p>mysql, postgresql, mongodb, sqlite, sql server, redis</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        );
    }
}