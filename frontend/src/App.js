import React, {Component} from 'react';

import './App.css';
import { Mainform } from './components/mainform';

class App extends Component {
  render(){
  return (
    <div className="App">
      <h1>Storage Calculator</h1>
      <br></br>
      <Mainform></Mainform>
    </div>
  );
  }
}

export default App;
