//Dependecia
import React from 'react';
import '../components/global/css/Count.css';

class Count extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          contador:0
        }
      }
      
      aumentar() {
        this.setState({contador:this.state.contador+1})
      }
      decrementar() { 
        let contador = this.state.contador
        if(contador>0) {
          this.setState({contador:contador-1})
        }
      }
      render() {
        return (
          <div>
          <div className="divTitle">{this.props.name}</div>
          <div className="divSecond"><input className="Button" type="button" onClick={this.decrementar.bind(this)} value="-" /></div>
             <div className="divSecond" id={this.props.id}>{this.state.contador}</div> 
             <div className="divSecond"><input className="Button" type="button" onClick={this.aumentar.bind(this)} value="+" /></div>
            
          </div>
        )
      }
      
    }
    
export default Count;


