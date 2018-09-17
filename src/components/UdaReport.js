import React, { Component } from 'react';
import Button from './Button.js'
import { getToken } from '../services/auth.js';
import { getReport } from '../services/report.js';
import LoadingPage from './LoadingPage.js';

class UdaReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null,
      url: null,
    }

    this.onClickHandler = this.onClickHandler.bind(this)
  }

  componentDidMount() {
    getToken('adalab', '4286')
      .then(res => {
        this.setState({
          token: res.data.authToken,
        }, () => console.log('token', this.state.token));
      })
  }

  onClickHandler() {
    console.log('Generating report');
    if (this.state.token !== null) {
      getReport(this.state.token, this.props.data)
        .then(res => {
          this.setState({
            url: res.data.url
          })
        })
    } else {
      return null;
    }
  }

  render() {
    return (
      <Button
        buttonText={this.props.buttonText}
        url={this.state.url}
        onClickHandler={this.onClickHandler}
      />
      // <LoadingPage />
    );
  }
}

export default UdaReport;
