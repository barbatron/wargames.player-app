import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css'

import Location from './Location';

import {geolocate} from './util/geolocate';



class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {location: null};
    this.renderLocation = this.renderLocation.bind(this);
  }

  componentDidMount() {
    geolocate().then(location => {
      this.setState({location: location});
    });
  }

  renderLocation() {
    return this.state.location
      ? <Location location={this.state.location}/>
      : <div>Loading location</div>;
  }

  render() {
    return (
      <div className="App">
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
