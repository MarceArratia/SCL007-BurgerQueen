//dependencia
import React from 'react';

class AddOrderLounch extends React.Component{
    constructor(props) {
        super(props);
    console.log(props.name)
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
        
   
    </tbody>
</table>
    )
}

}
export default AddOrderLounch;