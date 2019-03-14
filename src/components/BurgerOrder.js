//dependencia
import React from 'react';

class BurgerOrder extends React.Component{
constructor(props){
    super(props);
    this.state = {perro:'form-control',input:'Submit',tipo:'',tamaño:'',acompañamiento:'',pedido:[]};
}
onSubmit(e){
    e.preventDefault();
    if(this.submitInput.value === 'Agregar Pedido'){
    const obj = {tipo:this.state.tipo,tamaño:this.state.tamaño,acompañamiento:this.state.agregado};
    this.setState({pedido:[...this.state.pedido,obj],tipo:'',tamaño:'',acompañamiento:''});
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
            <div className="divTypes">Tipo</div>
            <div className="divTypes">Tamaño</div>
            <div className="divTypes">Agregado</div>
            <div className="divTypes">
                <select className="burgerTypes" id="burgerTypes" onChange={event => this.setState({ tipo: event.target.value})}>
                    <option value="0" defaultValue>Seleccione tipo</option>
                    <option value="Res">Res</option>
                    <option value="Vegetariana">Vegetariana</option>
                    <option value="Pollo">Pollo</option>
                </select>
            </div>
            <div className="divTypes">
                <select className="burgerSize" id="burgerSize" onChange={event => this.setState({ tamaño: event.target.value})} >
                    <option value="0" defaultValue>Seleccione tipo</option>
                    <option value="Simple">Simple</option>
                    <option value="Doble">Doble</option>
                </select>
            </div>
            <div className="divTypes">
                <select className="burgerAgreg" id="burgerAgreg" onChange={event => this.setState({ agregado: event.target.value})}>
                    <option value="0" defaultValue>Seleccione tipo</option>
                    <option value="Huevos">Huevos</option>
                    <option value="Queso">Queso</option>
                </select>
            </div>
            <div className="form-group"> 
                <div className="col-sm-offset-2 col-sm-10">
                  <input type="submit"  ref={(ref) => this.submitInput = ref} value={this.state.input} className="btn btn-default" value="Agregar Pedido"/>
                </div>
            </div>
            
            <input type="hidden" className="row-ref" value="" ref={(ref) => this.rowRef = ref}/>
        </form>
        <div className="container" >	
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Tipo</th>
                        <th>Tamaño</th>
                        <th>Acompañamiento</th>
                        <th>Options</th>
                    </tr>
                </thead>
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
            <td>{this.props.data.tipo}</td>
            
            <td>{this.props.data.tamaño}</td>
            
            <td>{this.props.data.acompañamiento}</td>
            <td className="glyphicon glyphicon-trash" onClick={() => {this.props.deleteRow(this.props.row)}}>X</td>

        </tr>
        
    );
}
}
export default BurgerOrder;