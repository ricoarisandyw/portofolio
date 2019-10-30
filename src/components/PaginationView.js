import React from 'react';
import '../App.css';

export default class PaginationView extends React.Component{
    render() {    
        return (
            <div className="app">
                <div className="pagination">
                    <span>&laquo;</span>
                    <span className="active">1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                </div>
            </div>
        );
    }
}