import React from "react";
import {Link} from "react-router-dom";

import BlogView from '../../../components/BlogView';

export default class Blog extends React.Component{
    render(){
        this.blogs = [
            {image:"assets/images/blog/b-1.jpg",title:"Untitled Blog",date:"October 1st 2019"},
            {image:"assets/images/blog/b-1.jpg",title:"Untitled Blog",date:"October 1st 2019"},
            {image:"assets/images/blog/b-1.jpg",title:"Untitled Blog",date:"October 1st 2019"}
        ]
        return(
            <section id="blog" className="blog-area pt-125 pb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center pb-25">
                                <h2 className="title">From The Blog</h2>
                                <p>Start from read, know, learn and become wise</p>
                            </div> 
                        </div>
                    </div>
                    <div className="row justify-content-center">
                    {this.blogs.map(function(object, i){
                        return <BlogView blog={object} key={i} />
                    })}
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-more text-center mt-50">
                                {/* <Link className="main-btn" to="/blog">More posts</Link> */}
                                <a className="main-btn" href="/blog">More posts</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}