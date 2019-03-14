//dependencia
import React from 'react';

class AddOrderLounch extends React.Component{
    constructor(props) {
        super();
}
render(){
    return(
    <table className="table table-hover">
    <thead>
        <tr>
            <th>Tipo</th>
            <th>Tamaño</th>
            <th>Agregado</th>
            <th>Options</th>
        </tr>
    </thead>
    <tbody>
        {console.log(this.props)}
   
    </tbody>
</table>
    )
}

}
export default AddOrderLounch;