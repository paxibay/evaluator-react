import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className='ui items'>
          Hello, friend! I am a basic React component.

        </div>
        <button className="ui primary button">
          Save
        </button>
        <button className="ui button">
          Discard
        </button>
        <div className='ui three column centered grid'>
          <div className='column'>
            AAAA
          </div>
        </div>
      </div>
    );
  }
}

export default App;
