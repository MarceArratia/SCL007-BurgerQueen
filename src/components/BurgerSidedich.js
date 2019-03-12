//dependencia
import React from 'react';

//componentes
class BurgerSidedich extends React.Component{
  constructor(props){
    super()
  }

  render() {
   
    return(
      <div>
        <input type='checkbox' id="patatoes" />Papas Fritas<br/>
        <input type='checkbox' id="aros" />Onion Rings<br/>
      </div>
       
    )
      //<input type='checkbox'></input> 
  }
}
  export default BurgerSidedich;