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
import BurgerDrinks from '../BurgerDrink';
import AddOrderLounch from '../AddOrderLounch';

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
  sendOrderLounch(){
    let arrayBurger=[];
    let countBurger=arrayBurger.length;
    if(document.getElementById("burgerTypes").value !== 0 && document.getElementById("burgerAgreg").value !== 0 && document.getElementById("burgerSize").value !== 0){
      arrayBurger.push(countBurger,document.getElementById("burgerTypes").value,
      document.getElementById("burgerAgreg").value,
      document.getElementById("burgerSize").value)
    }
    AddOrderLounch.name=arrayBurger;
 
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
<div className="order"><button>Pedido</button></div>
<div className="order"><button className="sendOrderBreakfast" onClick={this.sendOrderBreakfast}>Enviar</button></div>
</div>
<div id="menuLounch"  style={{display: 'none'}}>
<div>
  <p></p>
<div className="divTypes">Hamburguesas</div>
  <p></p>
  <div className="divTypes">Tipo</div>
</div>
<div className="divTypes"><TipoHamburguesa/></div>
<div className="divTittleTypes">Tamaño</div>
<div className="divTypes"><TamanioHamburguesa/></div>
<div className="divTittleTypes">Agregado</div>
<div className="divTypes"><AgregadoHamburguesa/></div>
<AddOrderLounch />
<div className="order"><button className="addOrder" onClick={this.sendOrderLounch}>Agregar</button></div>
<div className="divSidedich">Acompañamientos</div>
<div ><FrenchFries id="frenchFries" name="Papas fritas :"/></div>
<div ><OnionRings id="onionRings" name="Onion Rings :"/></div>
<div className="order"><button className="addOrder" >Agregar</button></div>
<div className="divSidedich">Bebidas</div>
<div><BurgerDrinks /></div>
<div className="order"><button className="addOrder" >Agregar</button></div>
</div>

  </div>
    );
  }
}

export default Content;