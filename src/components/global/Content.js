import React, { Component } from 'react';
import './css/Content.css';


class Content extends Component {
constructor(){
  super();

  this.state = {
    count:0
  };

  this.handleCountClick = this.handleCountClick.bind(this);
}
componentDidMount(){
  this.setState({
    count:1
  });
} 

handleCountClick(e){
  if(e.target.id === 'add'){
    this.setState({
      count: this.state.count + 1
    });
  }else if (e.target.id === 'subtract' && this.state.count > 0){
    this.setState({
      count: this.state.count - 1
})
  }
}

  render() {
    console.log('Ejecuta Render');
    return (
      <div className="Content">
        
        <h3>Mesero :</h3>
        <h3>Pedido Nº :</h3>
        <h3>Mesa Nº :</h3>
    <div>
        <button>Desayuno</button>
        <button>Almuerzo</button>
        
       

<p>
<h4>Café Americano: {this.state.count}<button id="add"  onClick={this.handleCountClick}>+</button><button id="subtract" onClick={this.handleCountClick}>-</button></h4>
<h4>Café con Leche: {this.state.count}<button id="add"  onClick={this.handleCountClick}>+</button><button id="subtract" onClick={this.handleCountClick}>-</button></h4>
<h4>Sandwich de Jamón Queso: {this.state.count}<button id="add"  onClick={this.handleCountClick}>+</button><button id="subtract" onClick={this.handleCountClick}>-</button></h4>
<h4>Jugo Natural: {this.state.count}<button id="add"  onClick={this.handleCountClick}>+</button><button id="subtract" onClick={this.handleCountClick}>-</button></h4>
<h3>Total :</h3>

</p>
        </div>
     
     
  </div>
    );
  }
}

export default Content;
