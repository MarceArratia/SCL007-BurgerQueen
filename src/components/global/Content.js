import React, { Component } from 'react';
import './css/Content.css';
import CafeAmericano from '../Contador';
import CafeLeche from '../Contador';
import SandwichJamon from '../Contador';
import JugoNatural from '../Contador';


class Content extends Component {
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
 
</p>
<p>
<h4>Café Americano:  <CafeAmericano /> </h4>
<h4>Café con Leche: <CafeLeche /></h4>
<h4>Sandwich de Jamón Queso: <SandwichJamon /></h4>
<h4>Jugo Natural: <JugoNatural /></h4>
<h3>Total :</h3>

</p>
        </div>
     
     
  </div>
    );
  }
}

export default Content;
