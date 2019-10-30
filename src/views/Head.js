import React from 'react';
import {Helmet} from "react-helmet";

export default class Head extends React.Component{
    render(){
        return(
            <Helmet>
                <meta charset="utf-8"/>
                <meta http-equiv="x-ua-compatible" content="ie=edge"/>
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <title>Rico: Personal Portfolio & CV</title>
                <link rel="shortcut icon" href="assets/images/favicon.png" type="image/png"/>
            </Helmet>
        );
    }
}