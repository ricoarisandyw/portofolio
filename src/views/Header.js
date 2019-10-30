import React from 'react';
import { Link } from "react-router-dom";

import Intro from './home/Intro';

export default class Header extends React.Component {
    render(){
        var intro = null;
        if(this.props.intro){
            intro = (<Intro />);
        }
        return (
            <header id="home" className="header-area">
                <div className="navigation fixed-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg">
                                    {/* <Link className="navbar-brand" to="/">
                                        <img src="/assets/images/logo.png" alt="Logo"/>
                                    </Link> */}
                                    <a className="navbar-brand" href="/">
                                        <img src="/assets/images/logo.png" alt="Logo"/>
                                    </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto">
                                            {/* <li className="nav-item"><Link className="page-scroll" to="/">Home</Link></li>
                                            <li className="nav-item"><Link className="page-scroll" to="/about">About</Link></li>
                                            <li className="nav-item"><Link className="page-scroll" to="/service">Services</Link></li>
                                            <li className="nav-item"><Link className="page-scroll" to="/work">Portfolio</Link></li>
                                            <li className="nav-item"><Link className="page-scroll" to="/blog">Blog</Link></li>
                                            <li className="nav-item"><Link className="page-scroll" to="/contact">Contact</Link></li> */}
                                            <li className="nav-item"><a className="page-scroll" href="#home">Home</a></li>
                                            <li className="nav-item"><a className="page-scroll" href="#about">About</a></li>
                                            <li className="nav-item"><a className="page-scroll" href="#service">Services</a></li>
                                            <li className="nav-item"><a className="page-scroll" href="#work">Portfolio</a></li>
                                            <li className="nav-item"><a className="page-scroll" href="#blog">Blog</a></li>
                                            <li className="nav-item"><a className="page-scroll" href="#contact">Contact</a></li>
                                        </ul>
                                    </div>
                                </nav> 
                            </div>
                        </div> 
                    </div> 
                </div> 
                {intro}
            </header>
        );
    }
}