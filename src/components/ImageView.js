import React from 'react';

export default class ImageView extends React.Component{
    render(){
        return (
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-work text-center mt-30">
                    <div className="work-image">
                        <img src={this.props.image.src} alt="work"/>
                    </div>
                    <div className="work-overlay">
                        <div className="work-content">
                            <h3 className="work-title">{this.props.image.title}</h3>
                            <ul>
                                <li><a className="image-popup" href={this.props.image.src}><i className="lni-plus"></i></a></li>
                                <li><a href="#"><i className="lni-link"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}