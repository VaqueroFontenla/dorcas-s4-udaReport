import React, { Component } from 'react';
import AdobeIcon from '../images/adobe-reader-symbol.svg';
import { buttonStyle, buttonTextStyle, buttonWrapper, adobeIconStyle, adobeIconContainer } from '../stylesheets/udaReportStyle.js'

class Button extends Component {
    render() {
        return (
            <div
                type="button"
                style={buttonStyle}
                onClick={this.props.onClickHandler}
            >
                <div
                    style={buttonWrapper}
                >
                    <div style={adobeIconContainer}>
                        <img
                            src={AdobeIcon}
                            alt="Adobe Icon"
                            style={adobeIconStyle}
                        />
                    </div>
                    <a
                        href={this.props.url}
                        style={buttonTextStyle}
                        target="_blank"
                    >
                        get report
                    </a>
                </div>
            </div>
        );
    }
}

export default Button;