//dependencia
import React from 'react';


//componentes
class BurgerSize extends React.Component{
  constructor(props){
    super()
  }

  render() {
   
    return(
      <div>
         <select className="burgerSize" id="burgerSize">
                <option value="0" selected>Seleccione tipo</option>
                <option value="Simple">Simple</option>
                <option value="Doble">Doble</option>
                </select>
      </div>
       
    )
      //<input type='checkbox'></input> 
  }
}
  export default BurgerSize;
  