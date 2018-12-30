import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import ApplicationBar from './components/ApplicationBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <ApplicationBar title="aaaa" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
