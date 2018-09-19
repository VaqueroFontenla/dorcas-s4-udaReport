import React, { Component } from 'react';
import Button from './Button.js'
import { getToken } from '../services/auth.js';
import { getReportEndpoint, getReportTaskqueue } from '../services/report.js'

class UdaReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null,
      assetId: null,
      url: null,
      style: '',
    }

    this.onClickGetReport = this.onClickGetReport.bind(this)
  }

  componentDidMount() {
    getToken('adalab', '4286')
      .then(res => {
        const assetID = res.data.portfolios.user[`User adalab (España)`].id
        this.setState({
          token: res.data.authToken,
          assetId: assetID
        }, () => console.log(this.state.assetId, this.state.token));
      })
  }

  onClickGetReport(e) {
    e.preventDefault();
    // loading blank page styles
    const wi = window.open('about:blank');

    const styling = document.createElement('style');
    const container = document.createElement('div');
    const text = document.createElement('h1');
    text.innerHTML = 'Your report is being generated';
    const wrapper = document.createElement('div');
    const bar1 = document.createElement('div');
    const bar2 = document.createElement('div');
    const bar3 = document.createElement('div');

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

    styling.textContent =
      `body {margin: 0; padding: 0;}
    .loadingPageContainer {background-color: #EFF2F7; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; width: 100%;}
    .loadingPageText {font-family: Gotham-Medium, sans-serif; color: #07090D;}
    .loadingBarWrapper {display: flex; height: 40px;}
    .loadingBar {background-color: #CA1C24; width: 10px; height: 35px; border-radius: 2px; margin-right: 5px;}
    @keyframes loading {
        0% { height: 35px; }
        50% { height: 15px; }
        100% { height: 35px; }
    }
    .load1 {animation: loading 1.5s 1s infinite;}
    .load2 {animation: loading 1.5s .5s infinite;}
    .load3 {animation: loading 1.5s 0s infinite;}`;
    // end of style

    let pdfPath;

    const options = {
      method: 'HEAD',
      mode: 'no-cors'
    }

    getReportEndpoint(this.props.properties, this.state.token)
      .then((res) => {
        pdfPath = res.url;
        console.log(res);

        let timerStart = Date.parse(new Date());
        let interval = setInterval(() => {
          let timerStop = Date.parse(new Date());
          console.log((timerStop - timerStart) / 3600);
          if ((timerStop - timerStart) / 3600 > 2.5) {
            let message = "There was a problem with your report, please try again. If the problem persist please contact us at:  support@urbandataanalytics.com";
            clearInterval(interval);
            alert(message);
            wi.close();
            return true;
          }

          getReportTaskqueue(res.task_id, this.state.token).then((response) => {
            if (response.status === 'finished') {
              let message = "Your report has been generated";
              clearInterval(interval);
              alert(message);
              wi.location.href = pdfPath;
            }
          });
        }, 1000);
      });
  }

  render() {
    const { buttonText, buttonStyles } = this.props;
    const { url } = this.state;
    return (
      <Button
        buttonText={buttonText}
        buttonStyles={buttonStyles}
        url={url}
        onClickHandler={this.onClickGetReport}
      />
    );
  }
}

export default UdaReport;
