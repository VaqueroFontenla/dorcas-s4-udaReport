var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import AdobeIcon from '../../images/adobe-reader-symbol.svg';
import { buttonStyle, buttonTextStyle, buttonWrapper, adobeIconStyle, adobeIconContainer } from './buttonStyle';

var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var _props$buttonStyles = this.props.buttonStyles,
                textColor = _props$buttonStyles.textColor,
                background = _props$buttonStyles.background,
                borderColor = _props$buttonStyles.borderColor,
                borderWeight = _props$buttonStyles.borderWeight,
                borderRadius = _props$buttonStyles.borderRadius;

            return React.createElement(
                'div',
                {
                    type: 'button',
                    style: Object.assign({}, buttonStyle, { backgroundColor: background,
                        borderColor: borderColor,
                        borderWeight: borderWeight,
                        borderRadius: borderRadius
                    }),
                    onClick: this.props.onClickHandler
                },
                React.createElement(
                    'div',
                    {
                        style: buttonWrapper
                    },
                    React.createElement(
                        'div',
                        { style: adobeIconContainer },
                        React.createElement('img', {
                            src: AdobeIcon,
                            alt: 'Adobe Icon',
                            style: adobeIconStyle
                        })
                    ),
                    React.createElement(
                        'span',
                        {
                            style: Object.assign({}, buttonTextStyle, { color: textColor })
                        },
                        this.props.buttonText
                    )
                )
            );
        }
    }]);

    return Button;
}(Component);

export default Button;