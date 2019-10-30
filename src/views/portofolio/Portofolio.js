import React from 'react';
import ImageView from '../../components/ImageView';
import PaginationView from '../../components/PaginationView';

export default class Portofolio extends React.Component {
    render(){
        this.images = [
            {src:'assets/images/portofolio/air logistic apps.png',title:'I work as backend in internship at ICON+'},
            {src:'assets/images/portofolio/arisan form.png',title:'I made Android library for Generate Form using model'},
            {src:'assets/images/portofolio/banter web v1.png',title:'First version of PT. Banter Dredger Web'},
            {src:'assets/images/portofolio/banter web v2.png',title:'Second version of PT. Banter Dredger Web, I use scss'},
            {src:'assets/images/portofolio/brainbow.png',title:'Competittion from Alcatel Lutel Hackathon that bring me to Jakarta'},
            {src:'assets/images/portofolio/buka pesanan.png',title:'Competittion from Indonesia startup Bukalapak'},
            {src:'assets/images/portofolio/calendra.png',title:'Competittion from Pometera API'},
            {src:'assets/images/portofolio/certificate bnsp 1.png',title:'Certificate from BNSP section OOP'},
            {src:'assets/images/portofolio/certificate bnsp 2.png',title:'Certificate from BNSP section DB'},
            {src:'assets/images/portofolio/certificate hackathon warung pintar.png',title:'Certificate Hackathon Warung Pintar'},
            {src:'assets/images/portofolio/certificate indonesia android kejar advance.png',title:'Certificate Indonesia Android Kejar Advance'},
            {src:'assets/images/portofolio/chatbot pens.png',title:'Final Project Chatbot PENS'},
            {src:'assets/images/portofolio/food banner.png',title:'Banner for my family small food tenant'},
            {src:'assets/images/portofolio/ies 1.jpeg',title:'Presentation in IES about my paper publication'},
            {src:'assets/images/portofolio/ies 2.jpeg',title:'Achivement from International Electronic Symphosium'},
            {src:'assets/images/portofolio/lapak probolinggo.png',title:'Android Apps "Lapak Probolinggo"'},
            {src:'assets/images/portofolio/mamo.png',title:'Competittion IWIC(Indosat) - Manage Money"'},
            {src:'assets/images/portofolio/monitoring cjn.png',title:'Bit improvement fro lecturer projects"'},
            {src:'assets/images/portofolio/obo king web.png',title:'1000 Startup Digital"'},
            {src:'assets/images/portofolio/seecow banner.png',title:'Competittion KMIPN"'},
            {src:'assets/images/portofolio/seecow.png',title:'Application for Seecow"'},
            {src:'assets/images/portofolio/sikada.png',title:'Sidoarjo Vice City Agenda"'},
            {src:'assets/images/portofolio/ukm music web.png',title:'Website for UKM Music PENS"'},
            {src:'assets/images/portofolio/wovent.png',title:'Todo list Apps"'}
        ];
        return (
            <div className="margin-header">
                <center><h1>Portofolio pages</h1></center>
                <div className="row">            
                    {this.images.map(function(object,i){
                        return <ImageView image={object} key={i} />
                    })}
                </div>
                {/* <PaginationView /> */}
            </div>
        );
    }
}