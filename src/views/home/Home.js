import React from 'react';
import About from './section/About';
import Service from './section/Service';
import Propose from './section/Propose';
import Works from './section/Works';
import Blog from './section/Blog';
import Contacts from './section/Contacts';

export default class Home extends React.Component {
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