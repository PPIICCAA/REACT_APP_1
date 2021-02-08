import React from 'react';
import listaPlatos from "../listaplatos.js"

class InputAumentar extends React.Component {
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

        let number = total + (total * this.state.tasas)
        return (
            <div className="footer">
                <h2>TOTAL: </h2>
                <p>{number}€</p>
            </div>
        )
    }
}
export default InputAumentar