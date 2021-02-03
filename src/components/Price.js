import listaPlatos from "../listaplatos.js"
import React from 'react';

class Price extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            subtotal: 0,
            tasas: 0.10
        }
    }
    render(){
        Object.keys(localStorage).map((plate, id)=> {
                return (
                this.state.subtotal += listaPlatos[plate].precioPlato * localStorage.getItem(plate)                  
            )
        })
        return (
            <div className="columnaPrecio">
                <p id="subtotal">{this.state.subtotal}€</p>
                <p id="tasas">{(this.state.subtotal * this.state.tasas).toPrecision(2)}€</p>
                <p id="delivery">FREE</p>
                <p id="total">{this.state.subtotal + (this.state.subtotal * this.state.tasas)}€</p>
            </div>
        )
    }
}

export default Price