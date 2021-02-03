import React from 'react';
import ReactDOM from 'react-dom';
import listaPlatos from "../listaplatos.js"
import FooterDisminuir from "./FooterDis.js"
import Contador from "./CounterCash.js"
import Items from "./Push.js"

class ItemsPush extends React.Component {
    x = () => {
        localStorage.removeItem(this.props.index)
        ReactDOM.render( <Items />, document.getElementById("pushList"));
        ReactDOM.render( <FooterDisminuir />, document.getElementById("price"));
    }
    render (){
        return (
    <div className="elemento">
        <img src={listaPlatos[this.props.index].imgPLato} alt=""/>
        <div className="texto ">
            <p>{listaPlatos[this.props.index].precioPlato}€</p>
            <h5>{listaPlatos[this.props.index].nombrePlato}</h5>
            <h6>{listaPlatos[this.props.index].descripcionPlato}</h6>
        </div>
        <Contador index={listaPlatos[this.props.index].id} counter={this.props.number}/>
    <button className="botonEliminar" onClick={this.x}>x</button>
    </div>
    )}}

export default ItemsPush