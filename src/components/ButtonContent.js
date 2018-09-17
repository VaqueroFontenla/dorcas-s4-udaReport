import React, { Component } from 'react';
import AdobeIcon from '../images/adobe-reader-symbol.svg';
import { buttonStyle, buttonTextStyle, buttonWrapper, adobeIconStyle, adobeIconContainer } from '../stylesheets/udaReportStyle.js';

class ButtonContent extends Component {
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
                    <span
                        style={buttonTextStyle}
                    >
                        {this.props.buttonText}
                    </span>
                </div>
            </div>
        );
    }
}

export default ButtonContent;