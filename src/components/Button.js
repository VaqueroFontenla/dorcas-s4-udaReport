import React, { Component } from 'react';
import AdobeIcon from '../images/adobe-reader-symbol.svg';
import { buttonStyle, buttonTextStyle, buttonWrapper, adobeIconStyle, adobeIconContainer } from '../stylesheets/udaReportStyle.js';

class Button extends Component {
    render() {
        const { textColor, background, borderColor, borderWeight, borderRadius } = this.props.buttonStyles;
        return (
            <div
                type="button"
                style={{
                    ...buttonStyle, backgroundColor: background,
                    borderColor: borderColor,
                    borderWeight: borderWeight,
                    borderRadius: borderRadius,
                }}
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
                        style={{ ...buttonTextStyle, color: textColor }}
                    >
                        {this.props.buttonText}
                    </span>
                </div>
            </div>
        );
    }
}

export default Button;