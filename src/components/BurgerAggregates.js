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
        <input type='checkbox' id="eggs" />Huevos<br/>
        <input type='checkbox' id="cheese" />Queso<br/>
      </div>
       
    )
      //<input type='checkbox'></input> 
  }
}
  export default BurgerAggregates;
  