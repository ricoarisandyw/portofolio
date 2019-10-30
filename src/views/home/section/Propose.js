import React from 'react';

export default class Propose extends React.Component {
    render(){
        return (
            //  style="background-image: url(assets/images/call-to-action.jpg)"
            <div>
                <section id="call-to-action" className="call-to-action pt-125 pb-130 bg_cover">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-9">
                                <div className="call-action-content text-center">
                                    <h2 className="action-title">Have any project on mind?</h2>
                                    <p>Let's construct this world to become easier to use. Download my CV or Portofolio here</p>
                                    <ul>
                                        <li><a className="main-btn custom" href="assets/docs/CV Rico.pdf" download>CV</a></li>
                                        <li><a className="main-btn custom-2" href="assets/docs/Portofolio Rico.pdf" download>Portofolio</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </section>
            </div>
        );
    }
}