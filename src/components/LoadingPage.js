import React, { Component } from 'react';
import { loadingPageContainer, loadingPageHeader, loadingBarWrapper, loadingBar } from '../stylesheets/loadingPageStyle.js';
import '../stylesheets/loadingAnimation.css';


class LoadingPage extends Component {
    render() {
        return (
            <div style={loadingPageContainer}>
            
                    <h1 style={loadingPageHeader}>Your report is being generated</h1>
            
                <main>
                    <div style={loadingBarWrapper}>
                        <div style={loadingBar} className="load1"></div>
                        <div style={loadingBar} className="load2"></div>
                        <div style={loadingBar} className="load3"></div>
                    </div>
                </main>
            </div>
        );
    }
}

export default LoadingPage;