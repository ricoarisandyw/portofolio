import React from 'react';
import Propose from './Propose';
import { Link } from "react-router-dom";

import ImageView from '../../../components/ImageView';

export default class Works extends React.Component {
    constructor(){
        super();
        this.images = [
            {src:'assets/images/portofolio/ies 1.jpeg',title:'Presentation in IES about my paper publication'},
            {src:'assets/images/portofolio/ies 2.jpeg',title:'Achivement from International Electronic Symphosium'},
            {src:'assets/images/portofolio/certificate hackathon warung pintar.png',title:'Certificate Hackathon Warung Pintar'},
            {src:'assets/images/portofolio/certificate indonesia android kejar advance.png',title:'Certificate Indonesia Android Kejar Advance'},
            {src:'assets/images/portofolio/banter web v2.png',title:'Banter Web'},
            {src:'assets/images/portofolio/lapak probolinggo.png',title:'Android Apps "Lapak Probolinggo"'}
        ];
    }
    render(){
        console.log("__works : render");
        return (
            <div>
                <section id="portofolio" className="work-area pt-125 pb-130">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="section-title pb-25">
                                    <h2 className="title">My Recent Works</h2>
                                    <p>Last updated on 1st October 2019</p>
                                </div> 
                            </div>
                        </div> 
                        <div className="row">            
                            {this.images.map(function(object,i){
                                return <ImageView image={object} key={i} />
                            })}
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="work-more text-center mt-50">
                                    <Link to="/portofolio" className="main-btn">more works</Link>
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