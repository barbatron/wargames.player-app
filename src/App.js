import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css'

import Position from './Position';

import {createObservable} from './util/geolocate';

import googleMapsApi from 'load-google-maps-api';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {position: null};
    this.renderLocation = this.renderLocation.bind(this);
  }

  componentDidMount() {
    this.subscription = createObservable().subscribe(position => this.setState({position}));
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  renderLocation() {
    return this.state.position
      ? <Position position={this.state.position}/>
      : <div>Positioning...</div>;
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.renderLocation()}
      </div>
    );
  }
}

export default App;
