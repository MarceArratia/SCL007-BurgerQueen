//dependencia
import React from 'react';


//componentes
class BurgerTips extends React.Component{
  constructor(props){
    super()
  }

  render() {
   
    return(
      <div>
        <input type='checkbox' id="pollo" />Pollo<br/>
        <input type='checkbox' id="res" />Res<br/>
        <input type='checkbox' id="vegetariana" />Vegetariana<br/>
      </div>
       
    )
      //<input type='checkbox'></input> 
  }
}
  export default BurgerTips;
  //checklist tipo hamburguesas agregando nombre hamburguerTip.js