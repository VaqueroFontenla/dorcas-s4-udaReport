var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import Button from '../Button/Button.js';
import { getToken } from '../../services/auth.js';
import { getReportEndpoint, getReportTaskqueue } from '../../services/report.js';

var UdaReport = function (_Component) {
  _inherits(UdaReport, _Component);

  function UdaReport(props) {
    _classCallCheck(this, UdaReport);

    var _this = _possibleConstructorReturn(this, (UdaReport.__proto__ || Object.getPrototypeOf(UdaReport)).call(this, props));

    _this.state = {
      token: null,
      url: null
    };

    _this.onClickGetReport = _this.onClickGetReport.bind(_this);
    return _this;
  }

  _createClass(UdaReport, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      getToken('adalab', '4286').then(function (res) {
        var assetID = res.data.portfolios.user['User adalab (Espa\xF1a)'].id;
        _this2.setState({
          token: res.data.authToken,
          assetId: assetID
        });
      });
    }
  }, {
    key: 'onClickGetReport',
    value: function onClickGetReport(e) {
      var _this3 = this;

      e.preventDefault();
      // loading blank page styles
      var wi = window.open('about:blank');

      var styling = document.createElement('style');
      var container = document.createElement('div');
      var text = document.createElement('h1');
      text.innerHTML = 'Your report is being generated';
      var wrapper = document.createElement('div');
      var bar1 = document.createElement('div');
      var bar2 = document.createElement('div');
      var bar3 = document.createElement('div');

      wrapper.appendChild(bar1);
      wrapper.appendChild(bar2);
      wrapper.appendChild(bar3);
      container.appendChild(text);
      container.appendChild(wrapper);
      wi.document.body.appendChild(container);
      wi.document.body.appendChild(styling);

      container.classList.add('loadingPageContainer');
      text.classList.add('loadingPageText');
      wrapper.classList.add('loadingBarWrapper');
      bar1.classList.add('loadingBar', 'load1');
      bar2.classList.add('loadingBar', 'load2');
      bar3.classList.add('loadingBar', 'load3');

      styling.textContent = 'body {margin: 0; padding: 0;}\n    .loadingPageContainer {background-color: #EFF2F7; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; width: 100%;}\n    .loadingPageText {font-family: Gotham-Medium, sans-serif; color: #07090D;}\n    .loadingBarWrapper {display: flex; height: 40px;}\n    .loadingBar {background-color: #CA1C24; width: 10px; height: 35px; border-radius: 2px; margin-right: 5px;}\n    @keyframes loading {\n        0% { height: 35px; }\n        50% { height: 15px; }\n        100% { height: 35px; }\n    }\n    .load1 {animation: loading 1.5s 1s infinite;}\n    .load2 {animation: loading 1.5s .5s infinite;}\n    .load3 {animation: loading 1.5s 0s infinite;}';
      // end of style

      var pdfPath = void 0;

      var options = {
        method: 'HEAD',
        mode: 'no-cors'
      };

      getReportEndpoint(this.props.properties, this.state.token).then(function (res) {
        pdfPath = res.url;
        console.log(res);

        var timerStart = Date.parse(new Date());
        var interval = setInterval(function () {
          var timerStop = Date.parse(new Date());
          console.log((timerStop - timerStart) / 3600);
          if ((timerStop - timerStart) / 3600 > 2.5) {
            var message = "There was a problem with your report, please try again. If the problem persist please contact us at:  support@urbandataanalytics.com";
            clearInterval(interval);
            alert(message);
            wi.close();
            return true;
          }

          getReportTaskqueue(res.task_id, _this3.state.token).then(function (response) {
            if (response.status === 'finished') {
              var _message = "Your report has been generated";
              clearInterval(interval);
              alert(_message);
              wi.location.href = pdfPath;
            }
          });
        }, 1000);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          buttonText = _props.buttonText,
          buttonStyles = _props.buttonStyles;
      var url = this.state.url;

      return React.createElement(Button, {
        buttonText: buttonText,
        buttonStyles: buttonStyles,
        url: url,
        onClickHandler: this.onClickGetReport
      });
    }
  }]);

  return UdaReport;
}(Component);

export default UdaReport;