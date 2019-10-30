import React from "react";

export default class Blog extends React.Component{
    render(){
        return(
            <section id="blog" className="blog-area pt-125 pb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center pb-25">
                                <h2 className="title">From The Blog</h2>
                                <p>Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis quis leo.</p>
                            </div> 
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-8 col-sm-9">
                            <div className="single-blog mt-30">
                                <div className="blog-image">
                                    <img src="assets/images/blog/b-1.jpg" alt="Blog"/>
                                </div>
                                <div className="blog-content">
                                    <h4 className="blog-title"><a href="#">Hired Releases 2023 Brand Health.</a></h4>
                                    <span>July 26, 2022</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-9">
                            <div className="single-blog mt-30">
                                <div className="blog-image">
                                    <img src="assets/images/blog/b-2.jpg" alt="Blog"/>
                                </div>
                                <div className="blog-content">
                                    <h4 className="blog-title"><a href="#">Hired Releases 2023 Brand Health.</a></h4>
                                    <span>July 26, 2022</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-9">
                            <div className="single-blog mt-30">
                                <div className="blog-image">
                                    <img src="assets/images/blog/b-3.jpg" alt="Blog"/>
                                </div>
                                <div className="blog-content">
                                    <h4 className="blog-title"><a href="#">Hired Releases 2023 Brand Health.</a></h4>
                                    <span>July 26, 2022</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-more text-center mt-50">
                                <a className="main-btn" href="#">More posts</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}