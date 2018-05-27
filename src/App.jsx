import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import WebRouter from './Router';

export default class App extends Component {
  render() {
    return (
      <div>
        <WebRouter />
      </div>
    );
  }
}
