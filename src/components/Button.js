import React, { Component } from 'react';
import ButtonContent from './ButtonContent.js';

class Button extends Component {
    render() {
        return (
            <ButtonContent
                buttonText={this.props.buttonText}
                onClickHandler={this.props.onClickHandler}
            />
        );
    }
}

export default Button;