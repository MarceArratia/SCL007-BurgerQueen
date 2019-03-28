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
import OrderKitchen from '../OrderKitchen';


//Menú desayuno y almuerzo
class Content extends Component { 
  sendOrderBreakfast(){
    let hora=new Date();
    hora=hora.getHours()+":"+hora.getMinutes()+","+hora.getDay()+"/"+hora.getMonth()+1+"/"+hora.getFullYear();
    let refmessageAnswer= firebase.database().ref();
    refmessageAnswer.push({
    Cliente:document.getElementById("textCliente").value,
    CafeAmericano:document.getElementById("coffeAmerican").innerHTML,
    CafeConLeche:document.getElementById("coffeMilk").innerHTML,
    Sandwich:document.getElementById("sandwichCheesse").innerHTML,
    JugoNatural:document.getElementById("naturalJuice").innerHTML,
    tipo:1,
    fechaHoraInicio:hora,
    estado:1,
    fechaHoraFin:""
  });
  }
  breakfastButton(){
    document.getElementById('menuBreakfast').style.display="block";
    document.getElementById('buttonLunch').style.display="none";
    document.getElementById('buttonBreakfast').style.display="none";
  }
  lounchButton(){
    document.getElementById('menuLounch').style.display="block";
    document.getElementById('buttonBreakfast').style.display="none";
    document.getElementById('buttonLunch').style.display="none";
  }

  ordenKitchen(){
    let orderKitchen="";
    let tableBurger=document.getElementById("burguerOrder");
    let orderBurger=tableBurger.getElementsByTagName('tr');
    for(let i=0;i<orderBurger.length;i++){
      if(orderBurger[i].innerText !=="<tbody></tbody>"){
        orderKitchen+=orderBurger[i].innerText+";";
        orderKitchen=String(orderKitchen).replace('X','');
      }
    }
    let sendDrinks="";
    let tableDrinks=document.getElementById('orderDrinks');
    let tdDrinks=tableDrinks.getElementsByTagName('tr');
    for(let i=0; i<tdDrinks.length;i++){
      if(tdDrinks[i].innerText !=="<tbody></tbody>"){
        sendDrinks+=tdDrinks[i].innerText+";";
        sendDrinks=String(sendDrinks).replace('X','');
      }
    }
    let hora=new Date();
    hora=hora.getHours()+":"+hora.getMinutes()+","+hora.getDay()+"/"+hora.getMonth()+1+"/"+hora.getFullYear();

    //firebase.initializeApp(DB_CONFIG);
    let refmessageAnswer= firebase.database().ref();
    refmessageAnswer.push({ 
      cliente:document.getElementById("lunchCliente").value,
      estado:1,
      fechaHoraFin:"",
      fechaHoraInicio:hora,
      tipo:2,
      detalle:orderKitchen,
      bebidas:sendDrinks

    });

  }

  orderWaiter(){
    document.getElementById('orderWaiter').style.display="block";
    document.getElementById('orderChef').style.display="none";
  }
  orderKitchenDiv(){
    
    document.getElementById('orderChef').style.display="none";
    document.getElementById('orderK').style.display="block";

  }
  render() {
    return (
    <div>
      <div id="orderChef" className="Content" >
        <div id="buttonWaiter" className="selectFood"><img alt="" className="buttonEmployed" src={require("../../imag/waiter.jpg")} onClick={this.orderWaiter}/></div>
        <div id="buttonChef" className="selectFood"><img alt="" className="buttonEmployed" src={require("../../imag/kitchen.jpg")} onClick={this.orderKitchenDiv}/></div>
      </div>
      <div id="orderK" style={{display: 'none'}}>
      <OrderKitchen />
      </div> 
      <div id="orderWaiter" className="Content" style={{display: 'none'}} >
        <div id="buttonBreakfast" className="selectFood"><img alt="" className="buttonAllCoffe" src={require("../../imag/coffe.png")} onClick={this.breakfastButton}/></div>
        <div id="buttonLunch"  className="selectFood"><img alt="" className="buttonAllBurger" src={require("../../imag/burger.png")} onClick={this.lounchButton}/></div>
     
<div id="menuBreakfast" className="fondBreakfast" style={{display: 'none'}}> 

<div className="menuTitle"><h2>Menú</h2></div>
<div><input  type="text" className="divForm" placeholder="Ingrese nombre cliente" id="textCliente"/></div>
  <div><CafeAmericano id="coffeAmerican" name="Café Americano :"/></div>
  <div><CafeLeche id="coffeMilk" name="Café con Leche :"/></div>
  <div><SandwichJamon id="sandwichCheesse" name="Sandwich Jamón Queso :"/></div>
  <div><JugoNatural id="naturalJuice" name="Jugo Natural :"/></div>
  <div className="order"><button className="buttonAddSend" onClick={this.sendOrderBreakfast}>Enviar</button></div>
</div>
<div id="menuLounch" className="fondLuch"  style={{display: 'none'}}>
<div>
  <p></p>
  <div><input  type="text" className="divForm" placeholder="Ingrese nombre cliente" id="lunchCliente"/></div>
<div className="menuTitleBurger">Hamburguesas</div>

  <p></p>

</div>

<BurgerOrder />

<div className="menuTitleDrinks">Bebidas</div>
<div><BurgerDrinks /></div>
<div className="order"><button className="buttonAddSend" onClick={this.ordenKitchen} >Enviar Pedido</button></div>
</div>

  </div>
  </div>
    );
  }
}

export default Content;