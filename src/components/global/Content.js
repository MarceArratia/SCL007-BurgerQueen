//dependencia
import React, { Component } from 'react';
import '../global/css/Content.css';

//componentes
import CafeAmericano from '../Count';
import CafeLeche from '../Count';
import SandwichJamon from '../Count';
import JugoNatural from '../Count';
import TipoHamburguesa from '../BurgerTypes';
import {DB_CONFIG} from '../../Initializers/firebase';
import firebase from 'firebase';
import TamanioHamburguesa from '../BurgerSize';
import AgregadoHamburguesa from '../BurgerAggregates';



//Menú desayuno y almuerzo
class Content extends Component {
  sendOrderBreakfast(){
    let arrayJson=[
      "Cliente:"+document.getElementById("textCliente").value,
      "Desayuno:","CafeAmericano:"+document.getElementById("coffeAmerican").innerHTML,
      "CafeConLeche:"+document.getElementById("coffeMilk").innerHTML,
      "Sandwich:"+document.getElementById("sandwichCheesse").innerHTML,
      "JugoNatural:"+document.getElementById("naturalJuice").innerHTML  
    ];
   firebase.initializeApp(DB_CONFIG);
    let refmessageAnswer= firebase.database().ref().child(document.getElementById("textCliente").value);
    refmessageAnswer.push({arrayJson});
  }
  render() {
    return (
      <div className="Content">
        <div><input type="text" placeholder="Ingrese nombre cliente" id="textCliente"/></div>
        
<div><CafeAmericano id="coffeAmerican" name="Café Americano :"/></div>
<div><CafeLeche id="coffeMilk" name="Café con Leche :"/></div>
<div><SandwichJamon id="sandwichCheesse" name="Sandwich Jamón Queso :"/></div>
<div><JugoNatural id="naturalJuice" name="Jugo Natural :"/></div>
<div className="order"><button className="sendOrderBreakfast" onClick={this.sendOrder}>Enviar pedido</button></div>
<div className="divTypes"><TipoHamburguesa/></div>
<div className="divTypes"><TamanioHamburguesa/></div>
<div className="divTypes"><AgregadoHamburguesa/></div>
<div className="order"><button className="sendOrder" onClick={this.sendOrder}>Agregar Pedido Almuerzo</button></div>
  </div>
    );
  }
}

export default Content;
