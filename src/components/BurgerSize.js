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
        <input type='checkbox' id="simple" />Simple<br/>
        <input type='checkbox' id="doble" />Doble<br/>
      </div>
       
    )
      //<input type='checkbox'></input> 
  }
}
  export default BurgerSize;
  