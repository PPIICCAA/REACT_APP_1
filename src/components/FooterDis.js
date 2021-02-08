import React from 'react';
import listaPlatos from "../listaplatos.js"

class FooterDisminuir extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            subtotal: 0,
            tasas: 0.10
        }
    }
    render(){
        let array = []
    Object.keys(localStorage).map((plate , element) =>{
        return (
            element = (listaPlatos[plate].precioPlato * localStorage.getItem(plate)),
            this.state.subtotal = element,
            array.push(element)
        )
    })
    let total = 0
    for (let i =0; i < array.length; i++){
        total += array[i]
    }
    let tasas = (total * this.state.tasas).toPrecision(2)
    let All = total + (total * this.state.tasas)
        return (
            <div className="columnaPrecio">
        <p id="subtotal">{total}€</p>
        <p id="tasas">{tasas}€</p>
        <p id="delivery">FREE</p>
        <p id="total">{All}€</p>
    </div>
        )
    }
}
export default FooterDisminuir