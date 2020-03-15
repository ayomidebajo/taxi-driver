import React, { Component } from 'react'
import Header from './home/header';
import About from './about/About';
import Services from './serve/Services'
import Tarrifs from './tarrifs/Tarrifs';

export class index extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <About />
                <Services />
                <Tarrifs />
            </div>
        )
    }
}

export default index
