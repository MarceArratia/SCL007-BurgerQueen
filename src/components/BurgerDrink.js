//Dependecia
import React from 'react';
import '../components/global/css/Count.css';

class BurgerDrinks extends React.Component{
    constructor(props){
        super()
      }
    
      render() {
       
        return(
          <div>
              <select id="mlDrink">
                <option value="1">500 ml</option>
                <option value="2">750 ml</option>
              </select>
              <div>Agua</div>
              <select id="waterTypes">
                <option value="0" defaultValue>Seleccione</option>
                <option value="1">Gas</option>
                <option value="2">Sin gas</option>
               </select>
               <div>Gaseosa</div>
              <select id="sodaTypes">
                <option value="0" defaultValue>Seleccione</option>
                <option value="1">Coca-cola</option>
                <option value="2">Fanta</option>
                <option value="3">Orange Crush</option>
                <option value="4">Bilz</option>
                <option value="5">Pap</option>
                <option value="6">Coca Zero</option>
               </select>
          </div>
           
        )
          //<input type='checkbox'></input> 
      }
    }
      export default BurgerDrinks;