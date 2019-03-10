import React from 'react';
class Contador extends React.Component{
    constructor(){
        super();
      
        this.state = {
          count:0
        };
      
        this.handleCountClick = this.handleCountClick.bind(this);
      }
      componentDidMount(){
        this.setState({
          count:1
        });
      } 
      
      handleCountClick(e){
        if(e.target.id === 'add'){
          this.setState({
            count: this.state.count + 1
          });
        }else if (e.target.id === 'subtract' && this.state.count > 0){
          this.setState({
            count: this.state.count - 1
      })
        }
      }
      render() {
        console.log('Ejecuta Render');
        return (
            <button> {this.state.count}<button id="add"  onClick={this.handleCountClick}>+</button><button id="subtract" onClick={this.handleCountClick}>-</button></button>
        )}
}
export default Contador;