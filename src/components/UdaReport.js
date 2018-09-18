import React, { Component } from 'react';
import Button from './Button.js'
import { getToken } from '../services/auth.js';
import { getReport } from '../services/report.js';
import LoadingPage from './LoadingPage.js';
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
      //var wi = window.open('about:blank', '_blank');
      const wi = window.open('about:blank');

      const x = document.createElement('div');
      x.innerText = "Your report is being generated";
      x.style = 'color: #000;padding:150px;';
      x.style.cssText = 'position:relative;top:100px;border:4px solid #ddd;border-radius: 12px;padding: 15px;text-align:center; font-family:arial; font-size:30px';

      wi.document.body.appendChild(x);

      let pdfPath;

      const properties = {
        assetId: 9903271,
        template: 'redhouse',
        prediction: 'ml',
        style: 'Estilo por defecto uDA'
    }

      const options = {
        method: 'HEAD',
        mode: 'no-cors'
      }

      getReportEndpoint(properties, this.state.token)
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
      return (
        <Button
          buttonText={this.props.buttonText}
          url={this.state.url}
          onClickHandler={this.onClickGetReport}
        />
        // <LoadingPage />
      );
    }
  }

export default UdaReport;
