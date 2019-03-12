//dependencia
import React, { Component } from 'react';
import '../global/css/Content.css';

//componentes
import CafeAmericano from '../Count';
import CafeLeche from '../Count';
import SandwichJamon from '../Count';
import JugoNatural from '../Count';
import TipoHamburguesa from '../BurgerTips';

//Menú desayuno
class Content extends Component {
  sendOrder(){
    /*alert(document.getElementById("ca").innerHTML);*/
    let arrayJson=[
      "Cliente:"+document.getElementById("textCliente").value,
      "Desayuno:","CafeAmericano:"+document.getElementById("coffeAmerican").innerHTML,
      "CafeConLeche:"+document.getElementById("coffeMilk").innerHTML,
      "Sandwich:"+document.getElementById("sandwichCheesse").innerHTML,
      "JugoNatural:"+document.getElementById("naturalJuice").innerHTML  
    ];
    console.log(arrayJson);
  }
  render() {
    return (
      <div className="Content">
        <div><input type="text" placeholder="Ingrese nombre cliente" id="textCliente"/></div>
        
<div><CafeAmericano id="coffeAmerican" name="Café Americano :"/></div>
<div><CafeLeche id="coffeMilk" name="Café con Leche :"/></div>
<div><SandwichJamon id="sandwichCheesse" name="Sandwich Jamón Queso :"/></div>
<div><JugoNatural id="naturalJuice" name="Jugo Natural :"/></div>
<div className="order"><button className="sendOrder" onClick={this.sendOrder}>Enviar pedido</button></div>
<div><TipoHamburguesa/></div>
  </div>
    );
  }
}

export default Content;
