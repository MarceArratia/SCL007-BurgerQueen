import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        
        <h2>Mesero :</h2>
        <h2>Pedido Nº :</h2>
        <h2>Mesa Nº :</h2>
    
        <input type="button" value="Desayuno" />
        <input type="button" value="Almuerzo"/>
        <table>
    <tr>
    <td><h5>Descripción     Cantidad</h5></td>
    </tr>
    <tr>
        <td>Café Americano</td><td>0</td> <td input type="button"></td><td input type="button"></td>
    </tr>
    <tr>
    <td>Café con leche</td><td>0</td> <td input type="button"></td><td input type="button"></td>
    </tr> 
    <tr>
    <td>Sandwich de Jamón y Queso</td><td>0</td> <td input type="button"></td><td input type="button"></td>
    </tr>  
    <tr>
    <td>Jugo Natural</td><td>0</td> <td input type="button"></td><td input type="button"></td>
    </tr> 
    <tr>
    <td>Total</td><td>0</td> <td input type="button"></td><td input type="button"></td>
    </tr> 
    </table>
  </div>
    );
  }
}

export default Content;
