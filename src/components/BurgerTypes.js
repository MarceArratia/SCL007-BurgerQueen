//dependencia
import React from 'react';
import '../components/global/css/BurgerTypes.css';

//componentes
class BurgerTypes extends React.Component{
  constructor(props){
    super()
  }

  render() {
    return(
      <div>
        <select className="burgerTypes" id="burgerTypes">
                <option value="0" selected>Seleccione tipo</option>
                <option value="Res">Res</option>
                <option value="Vegetariana">Vegetariana</option>
                <option value="Pollo">Pollo</option>
                </select>
      </div>
       
    )
  }
}
  export default BurgerTypes;
  