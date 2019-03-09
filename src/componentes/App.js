//Dependencias
import React, { Component } from 'react';


//components
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

//Data
import items from '../data/menu';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header title="Burguer Queen" items={items}/>
      <Content/>
      <Footer copyright ="&copy; Burguer Queen 2019"/>
      </div>
    );
  }
}

export default App;
