import React, { Component } from 'react'
import Header from './home/header';
import About from './about/About';
import Services from './serve/Services'
import Tarrifs from './tarrifs/Tarrifs';
import Stats from './stats/Stats';
import AppDownload from './app-download/AppDownload';
import Footer from './footer/Footer';
import Select from 'react-select';

export class index extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <About />
                <Services />
                <Tarrifs />
                <Stats />
                <AppDownload />
                <Footer />
            </div>
        )
    }
}

export default index
