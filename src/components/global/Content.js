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
import FrenchFries from '../Count';
import OnionRings from '../Count';
import BurgerDrinks from '../BurgerDrink'

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
  breakfastButton(){
    document.getElementById('menuBreakfast').style.display="block";
  }
  lounchButton(){
    document.getElementById('menuLounch').style.display="block";
  }

  render() {
    return (
      <div className="Content">
        <div><input type="text" placeholder="Ingrese nombre cliente" id="textCliente"/></div>
        <div className="menuTitle"><h3>Menú</h3></div>
        <div ><button className="menuOrder" onClick={this.breakfastButton}>Desayuno</button>
        <button className="menuOrder" onClick={this.lounchButton}>Almuerzo</button>
        </div>
        
<div id="menuBreakfast" style={{display: 'none'}}> 
<div><CafeAmericano id="coffeAmerican" name="Café Americano :"/></div>
<div><CafeLeche id="coffeMilk" name="Café con Leche :"/></div>
<div><SandwichJamon id="sandwichCheesse" name="Sandwich Jamón Queso :"/></div>
<div><JugoNatural id="naturalJuice" name="Jugo Natural :"/></div>
<div className="order"><button className="sendOrderBreakfast" onClick={this.sendOrder}>Enviar pedido</button></div>
</div>
<div id="menuLounch"  style={{display: 'none'}}>
<div>
  <p></p>
<div className="divTypes">Hamburguesas</div>
  <p></p>
  <div className="divTypes">Tipo</div>
  <div className="divTypes">Tamaño</div>
  <div className="divTypes">Agregado</div>
</div>
<div className="divTypes"><TipoHamburguesa/></div>
<div className="divTypes"><TamanioHamburguesa/></div>
<div className="divTypes"><AgregadoHamburguesa/></div>
<div className="order"><button className="addOrder" onClick={this.sendOrder}>Agregar Pedido</button></div>
<div className="divSidedich">Acompañamientos</div>
<div ><FrenchFries id="frenchFries" name="Papas fritas :"/></div>
<div ><OnionRings id="onionRings" name="Onion Rings :"/></div>
<div className="divSidedich">Bebidas</div>
<div><BurgerDrinks /></div>
</div>

  </div>
    );
  }
}

export default Content;
