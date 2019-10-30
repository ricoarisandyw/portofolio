import React from 'react';

export default class BlogView extends React.Component{
    render(){
        return (
            <div className="col-lg-4 col-md-8 col-sm-9">
                <div className="single-blog mt-30">
                    <div className="blog-image">
                        <img src={this.props.blog.image} alt="Blog"/>
                    </div>
                    <div className="blog-content">
                        <h4 className="blog-title"><a href="#">{this.props.blog.title}</a></h4>
                        <span>{this.props.blog.date}</span>
                    </div>
                </div>
            </div>
        );
    }
}