import React from 'react';

export default class About extends React.Component {
    render(){
        return (
            <section id="about" className="about-area pt-125 pb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center">
                                <h2 className="title">About Me</h2>
                                <p><i>"All solves is from God(Allah) permission"</i></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-content mt-50">
                                <h5 className="about-title">Hi There! I'm Rico Arisandy Wijaya</h5>
                                <p>I'm a person who entusiased in invention, build something matters that could impact and help some people.
                                I'm so excited when learn something new. It like open the new world for me. Iron man is my idol, fiction right?
                                Yeah, if it not fiction then it actually done or cannot become my dreams.</p>
                            </div> 
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-lg-6">
                            <div className="about-skills pt-25">
                                <div className="skill-item mt-25">
                                    <div className="skill-header">
                                        <h6 className="skill-title">WEB : laravel, Yii2, Flask, Reactjs</h6>
                                        <div className="skill-percentage">
                                            <div className="count-box counted">
                                                <span className="counter">95</span>
                                            </div>
                                            %
                                        </div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <div className="bar progress-line" data-width="95"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item mt-25">
                                    <div className="skill-header">
                                        <h6 className="skill-title">MOBILE : Android Native, React Native, Flutter</h6>
                                        <div className="skill-percentage">
                                            <div className="count-box counted">
                                                <span className="counter">80</span>
                                            </div>
                                            %
                                        </div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <div className="bar progress-line" data-width="60"></div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="skill-item mt-25">
                                    <div className="skill-header">
                                        <h6 className="skill-title">OOP : python, php, Java, Kotlin, C#</h6>
                                        <div className="skill-percentage">
                                            <div className="count-box counted">
                                                <span className="counter">97</span>
                                            </div>
                                            %
                                        </div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <div className="bar progress-line" data-width="97"></div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="skill-item mt-25">
                                    <div className="skill-header">
                                        <h6 className="skill-title">DB : MySQL, SQL Server, MongoDB, PostgreSQL, Redis </h6>
                                        <div className="skill-percentage">
                                            <div className="count-box counted">
                                                <span className="counter">80</span>
                                            </div>
                                            %
                                        </div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <div className="bar progress-line" data-width="80"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item mt-25">
                                    <div className="skill-header">
                                        <h6 className="skill-title">OTHERS : Photoshop, Openshot</h6>
                                        <div className="skill-percentage">
                                            <div className="count-box counted">
                                                <span className="counter">60</span>
                                            </div>
                                            %
                                        </div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <div className="bar progress-line" data-width="60"></div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}