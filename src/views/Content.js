import React from 'react';
import About from './home/About';
import Service from './home/Service';
import Propose from './home/Propose';
import Works from './home/Works';
import Blog from './home/Blog';
import Contacts from './home/Contacts';

export default class Content extends React.Component {
    render(){
        return (
            <div>
                <About />
                <Service />
                <Propose />
                <Works />
                <Blog />
                <Contacts />
            </div>
        );
    }
}