import React, { Component } from 'react';
import '../components/global/css/OrderKitchen.css'
import firebase from 'firebase';

//orderKitchen para utilizar las ordenes de la cocina
class OrderKitchen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    let arrayBurguer=[];
    let arrayDrink=[];
  }
  //primera función que se ejecuta despues de que orderKitchen haya renderizado
  componentWillMount() {
    let dataOrder=[];
    const refName=firebase.database().ref();
    refName.on('value',(snapshot)=>{
      dataOrder=[]; //snapchot estado de la data,siempre esta mirando la data
      snapshot.forEach(function(childSnapshot) {
        let item = childSnapshot.val();//informacion del pedido
        item.key = childSnapshot.key;
        dataOrder.push(item);    
      })
      this.setState(prevState => { //setState asigna valor al estado, prevState comprueba estado anterior del estado
        return { data: [...prevState.data, ...dataOrder] };
      });
      //document.getElementById("divDetalle").innerHTML="";
    })   
    
  }
 
  actualizar(event,key){

   let hora=new Date();
    hora=hora.getHours()+":"+hora.getMinutes()+","+hora.getDay()+"/"+hora.getMonth()+1+"/"+hora.getFullYear();
    let refmessage=firebase.database().ref().child(event);
        refmessage.update({
          estado:2,
          fechaHoraFin:hora
        });
      var temp = this.state.data.filter((el)=>el.key !== event);
      this.setState({
        data: temp
       })    
       
  }
 
  render() {
    return(
      <div className="contentOrder" id="divDetalle">
   <main id="accordion">
   {this.state.data.map(task=>{//buscando data
            if(task.tipo===1 && task.estado===1){//task arreglos de los hijos,si estado es 1 lo dibuja
              return (
                <section id={task.Cliente}>
                <a href={"#"+task.Cliente}><h1>Nombre Cliente:{task.Cliente} {task.fechaHoraInicio}</h1></a>
                <ul id={task.key}>
                  <li>Cafe Americano : {task.CafeAmericano}</li>
                  <li>Cafe con Leche : {task.CafeConLeche}</li>
                  <li>Jugo Natural : {task.JugoNatural}</li>
                  <li>Sandwich : {task.Sandwich}</li>
                </ul>
              <button id={task.key} className="endOrder" onClick={this.actualizar.bind(this,task.key)}>Terminar Pedido</button>
                </section>
              )
            }else
            if(task.tipo===2 && task.estado===1){
              return(
                <section id={task.cliente}>
                <a href={"#"+task.cliente}><h1>Nombre Cliente:{task.cliente} {task.fechaHoraInicio}</h1></a>
                {this.arrayBurguer=String(task.detalle).split(';').map(burguerFor=>{
                  return(
                    <ul>
                      <li>{burguerFor}</li>
                    </ul>)
                })
                }
                {this.arrayDrink=String(task.bebidas).split(';').map(drinkFor=>{
                  return(
                    <ul>
                      <li>{drinkFor}</li>
                    </ul>)
                })
                }
              <button id={task.key} className="endOrder" onClick={this.actualizar.bind(this,task.key)}>Terminar Pedido</button>
                </section>
              )
            }else{
              return "";
            }
           
            })}
    </main>
   </div>
  )}
}

export default OrderKitchen;