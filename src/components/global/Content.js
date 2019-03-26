//dependencia
import React, { Component } from 'react';
import '../global/css/Content.css';
import '../global/css/Button.css';
//componentes
import CafeAmericano from '../Count';
import CafeLeche from '../Count';
import SandwichJamon from '../Count';
import JugoNatural from '../Count';
import {DB_CONFIG} from '../../Initializers/firebase';
import firebase from 'firebase';
import BurgerDrinks from '../BurgerDrinks';  
import BurgerOrder from '../BurgerOrder';


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

   //firebase.initializeApp(DB_CONFIG);
    let refmessageAnswer= firebase.database().ref().child(document.getElementById("textCliente").value);
    refmessageAnswer.push({arrayJson});
  }
  breakfastButton(){
    document.getElementById('menuBreakfast').style.display="block";
    document.getElementById('buttonLunch').style.display="none";
  }
  lounchButton(){
    document.getElementById('menuLounch').style.display="block";
    document.getElementById('buttonBreakfast').style.display="none";
  }

  ordenKitchen(){
    let orderKitchen=[];
    let tableBurger=document.getElementById("burguerOrder");
    let orderBurger=tableBurger.getElementsByTagName('tr');
    for(let i=0;i<orderBurger.length;i++){
      if(orderBurger[i].innerText !=="<tbody></tbody>"){
        console.log(orderBurger[i].innerText);
        orderKitchen.push(orderBurger[i].innerText);
      }
    }
    let tableDrinks=document.getElementById('orderDrinks');
    let tdDrinks=tableDrinks.getElementsByTagName('tr');
    for(let i=0; i<tdDrinks.length;i++){
      if(tdDrinks[i].innerText !=="<tbody></tbody>"){
        console.log(tdDrinks[i].innerText);
        orderKitchen.push(tdDrinks[i].innerText);
      }
    }
    firebase.initializeApp(DB_CONFIG);
    let refmessageAnswer= firebase.database().ref().child(document.getElementById("textCliente").value);
    refmessageAnswer.push({orderKitchen});
 
  }

  render() {
    return (
    
      <div className="Content" >
        <div><input  type="text" placeholder="Ingrese nombre cliente" id="textCliente"/></div>
        <div className="menuTitle"><h3>Menú</h3></div>
        <div id="buttonBreakfast" className="selectFood"><img className="buttonAll" src={require("../../imag/breakfast.jpg")} onClick={this.breakfastButton}/></div>
        <div id="buttonLunch"  className="selectFood"><img className="buttonAll" src={require("../../imag/lunch.png")} onClick={this.lounchButton}/></div>
        
<div id="menuBreakfast" class="fondBreakfast" style={{display: 'none'}}> 
  <div><CafeAmericano id="coffeAmerican" name="Café Americano :"/></div>
  <div><CafeLeche id="coffeMilk" name="Café con Leche :"/></div>
  <div><SandwichJamon id="sandwichCheesse" name="Sandwich Jamón Queso :"/></div>
  <div><JugoNatural id="naturalJuice" name="Jugo Natural :"/></div>
  <div className="order"><button className="buttonAddSend" onClick={this.sendOrderBreakfast}>Enviar</button></div>
</div>
<div id="menuLounch" class="fondLuch"  style={{display: 'none'}}>
<div>
  <p></p>
<div className="menuTitleBurger">Hamburguesas</div>
  <p></p>

</div>

<BurgerOrder />

<div className="menuTitleDrinks">Bebidas</div>
<div><BurgerDrinks /></div>
<div className="order"><button className="buttonAddSend" onClick={this.ordenKitchen} >Enviar Pedido</button></div>
</div>

  </div>

    );
  }
}

export default Content;