import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Head from './Head';
import PageLoader from '../components/PageLoader';
import Content from './Content';

export default class Template extends React.Component {
    render(){
        console.log("__template : begin");
        return (
            <div>
                <Head />
                <PageLoader />
                <Header intro={this.props.intro}/>
                <Content />
                {/* {this.props.component} */}
                <Footer />
            </div>
        );
    };
}