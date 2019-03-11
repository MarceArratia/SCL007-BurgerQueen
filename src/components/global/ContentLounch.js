//dependencia
import React, { Component } from 'react';
import '../global/css/Content.css';

//componentes

import HamburguesaSimple from '../Count';
import HamburguesaDoble from '../Count';
import PapasFritas from '../Count';
import OnionRings from '../Count';

//Menú almuerzo
class ContentLounch extends Component {
    sendOrderLunch(){
      /*alert(document.getElementById("ca").innerHTML);*/
      let arrayJsonLunch=[
        "Almuerzo:","HamburguesaSimple:"+document.getElementById("BurgerSimple").innerHTML,
        "HamburguesaDoble:"+document.getElementById("BurgerDoble").innerHTML,
        "PapasFritas:"+document.getElementById("FrenchFries").innerHTML,
        "OnionRings:"+document.getElementById("OnionRings").innerHTML
      ];
      console.log(arrayJsonLunch);
    }
    render() {
      return (
        <div className="Content">
          
          
  <div><HamburguesaSimple id="BurgerSimple" name="Hamburguesa Simple:"/></div>
  <div><HamburguesaDoble id="BurgerDoble" name="Hamburguesa Doble :"/></div>
  <div><PapasFritas id="FrenchFries" name="Papas Fritas :"/></div>
  <div><OnionRings id="OnionRings" name="Onion Rings :"/></div>
  <div className="order"><button className="sendOrder" onClick={this.sendOrder}>Enviar pedido</button></div>
    </div>
      );
    }
  }
  