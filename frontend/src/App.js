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
      <footer>*Application ML model has been trained with a small set of fabricated data. Infrastructure in place to be able to work with self storage companies to train with real customer data</footer>
    </div>
  );
  }
}

export default App;
