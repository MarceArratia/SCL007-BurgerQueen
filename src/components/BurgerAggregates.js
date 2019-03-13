//dependencia
import React from 'react';


//componentes
class BurgerAggregates extends React.Component{
  constructor(props){
    super()
  }

  render() {
   
    return(
      <div>
         <select className="burgerAgreg" id="burgerAgreg">
                <option value="0" selected>Seleccione tipo</option>
                <option value="Huevos">Huevos</option>
                <option value="Queso">Queso</option>
                </select>
      </div>
       
    )
      //<input type='checkbox'></input> 
  }
}
  export default BurgerAggregates;
  