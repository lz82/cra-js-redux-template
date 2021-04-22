import React, { Component } from 'react';
import { Result, Button } from 'antd';
import fail from './img/fail.svg';

class ErrorBoundary extends Component {
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  state = {
    hasError: false
  };

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  onBackClick() {
    window.location.href = '/';
  }

  render() {
    if (this.state.hasError) {
      return (
        <Result
          subTitle="Sorry, something went wrong."
          icon={<img src={fail} alt="" />}
          extra={
            <Button type="primary" onClick={this.onBackClick}>
              返回首页
            </Button>
          }
        />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
