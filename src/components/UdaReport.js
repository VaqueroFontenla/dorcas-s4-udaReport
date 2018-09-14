import React, { Component } from 'react';
import Button from './Button.js'
import { getToken } from '../services/auth.js';
import { getReport } from '../services/report.js';

class UdaReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null,
      url: null,
    }
  }

  componentDidMount() {
    getToken('adalab', '4286')
      .then(res => {
        this.setState({
          token: res.data.authToken,
        }, () => console.log('token', this.state.token));
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.token !== null
      && this.state.token !== prevState.token) {
      getReport(this.state.token)
        .then(res => {
          this.setState({
            url: res.data.url
          })
        })
    }
  }

  render() {
    return (
      <Button
        url={this.state.url}
        onClickHandler={this.onClickHandler}
      />
    );
  }
}

export default UdaReport;
