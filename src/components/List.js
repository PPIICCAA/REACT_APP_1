import React from 'react';
import ReactDOM from 'react-dom';
import listaPlatos from "../listaplatos.js"
import Plate from "./Plate.js"

    function NewList(x) {
        let name = x.target.offsetParent.id
        if (name === ""){
            name = x.target.id
        }

        class NewList extends React.Component {
        render(){
            const list = listaPlatos.map((plate, i) =>{
                for (let j = 0; j < plate.nombreCategoria.length; j ++){
                    if (plate.nombreCategoria[j] === name){
                    return <Plate key={i} img={plate.imgPLato} precioPlato={plate.precioPlato} nombrePlato={plate.nombrePlato} descripcionPlato={plate.descripcionPlato} id={listaPlatos[i].id} number={listaPlatos[i].cantidad}/>
                }
            }}
                )
            return (<div>{list}</div>)
        }
    }
    ReactDOM.render( <NewList />, document.getElementById("list"));
    }

export default NewList