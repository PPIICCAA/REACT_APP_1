import React from 'react';
import listaPlatos from "../listaplatos.js"

class InputNormal extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            subtotal: 0.00,
            tasas: 0.10
        }
    }
    render(){
        Object.keys(localStorage).map((plate, id)=> {
                return (this.state.subtotal += listaPlatos[plate].precioPlato * localStorage.getItem(plate))
        })
        
        let number = this.state.subtotal + (this.state.subtotal * this.state.tasas)
        return (
            <div className="footer">
                    <h2>TOTAL: </h2>
                <p>{number}€</p>
            </div>
        )
    }
}
export default InputNormal