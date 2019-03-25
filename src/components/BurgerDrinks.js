//dependencia
import React from 'react';
import '../components/global/css/BurgerDrinks.css';

class BurgerDrinks extends React.Component{
constructor(props){
    super(props);
    this.state = {perro:'form-control',input:'Submit',ml:'',agua:'',gaseosa:'',pedido:[]};
}
onSubmit(e){
    e.preventDefault();
    if(this.submitInput.value === 'Agregar'){
    const obj = {tipo:this.state.tipo,ml:this.state.ml,agua:this.state.agua,gaseosa:this.state.gaseosa};
    this.setState({pedido:[...this.state.pedido,obj],tamaño:'',agregado:'',acompañamiento:''});
    }else 
        if(this.submitInput.value === 'Edit'){
           /* const pos = Number(this.rowRef.value);
            console.log(pos);
            this.state.pedido[pos].tipo = this.inputName.value;
            this.state.pedido[pos].tamaño = this.inputLtipo.value;
            this.state.pedido[pos].acompañamiento = this.inputEmail.value;
            this.submitInput.value = 'Submit'; 
            this.forceUpdate();*/
    }
}

deleteRow(row){
    var pos = this.state.pedido.indexOf(row);
    this.setState({pedido:this.state.pedido.slice(0,pos)});
    
    
}	
editRow(row){
/*var pos = this.state.pedido.indexOf(row);
this.inputName.value = this.state.pedido[row].tipo;
this.state.tipo = this.state.pedido[row].tipo;
this.inputLtipo.value = this.state.pedido[row].tamaño;
this.state.tamaño = this.state.pedido[row].tamaño;
this.inputEmail.value = this.state.pedido[row].acompañamiento;
this.state.acompañamiento = this.state.pedido[row].acompañamiento;
this.rowRef.value = row;
this.state.input = 'Edit';
this.forceUpdate();*/
}
render(){
return(
    <div className="container">
        <form className="form-horizontal" role="form" onSubmit={this.onSubmit.bind(this)}>
            <div className="drinksTypesTwo">ml</div>
            <div className="drinksTypesTwo">Agua</div>
            <div className="drinksTypesTwo">Gaseosa</div>
            <div className="drinksOptions">
                <select  className="buttonAddDrinks" id="burgerTypes" onChange={event => this.setState({ ml: event.target.value})}>
                    <option value="0" defaultValue>Seleccione tipo</option>
                    <option value="500 ml">500 ml</option>
                    <option value="750 ml">750 ml</option>
                </select>
            </div>
            <div className="drinksOptions">
                <select className="buttonAddDrinks"id="burgerSize" onChange={event => this.setState({ agua: event.target.value})} >
                    <option value="0" defaultValue>Seleccione tipo</option>
                    <option value="Con gas">Con gas</option>
                    <option value="Sin gas">Sin gas</option>
                </select>
            </div>
            <div className="drinksOptions">
                <select className="buttonAddDrinks" id="burgerAgreg" onChange={event => this.setState({ gaseosa: event.target.value})}>
                    <option value="0" defaultValue>Seleccione tipo</option>
                    <option value="Coca-cola">Coca-cola</option>
                    <option value="Fanta">Fanta</option>
                    <option value="Orange Crush">Orange Crush</option>
                    <option value="Bilz">Bilz</option>
                    <option value="Pap">Pap</option>
                    <option value="Coca Zero">Coca Zero</option>
                </select>
            </div>
            <div className="form-group"> 
                <div className="col-sm-offset-2 col-sm-10">
                  <input type="submit"  ref={(ref) => this.submitInput = ref} value={this.state.input} className="buttonAddAll" value="Agregar"/>
                </div>
            </div>
            
            <input type="hidden" className="row-ref" value="" ref={(ref) => this.rowRef = ref}/>
        </form>
        <div className="container" >	
            <table id="orderDrinks" className="table table-hover">
                <tbody>    
                    {this.state.pedido.map((data,index) => {                 
                        return <Row editRow= {this.editRow.bind(this)} pedido = {this.state.pedido}  data = {data} key={index} row={index} deleteRow={this.deleteRow.bind(this)} />
                    })}
                            
                </tbody>
            </table>
        </div>
    </div>
);	
}
}
class Row extends React.Component{
constructor(props){
    super();
}

render(){
    return (
        <tr>
            <td>{this.props.data.ml}</td>
            
            <td>{this.props.data.agua}</td>

            <td>{this.props.data.gaseosa}</td>
            
            <td className="glyphicon glyphicon-trash" onClick={() => {this.props.deleteRow(this.props.row)}}>X</td>

        </tr>
        
    );
}
}
export default BurgerDrinks;