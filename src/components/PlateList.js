import listaPlatos from "../listaplatos.js"
import Plate from "./Plate.js"

const PlateList = () => {
    let list = listaPlatos.map((plate, i) =>{
        return (<Plate key={i} 
        img={plate.imgPLato} 
        precioPlato={plate.precioPlato} 
        nombrePlato={plate.nombrePlato} 
        descripcionPlato={plate.descripcionPlato} 
        id={listaPlatos[i].id} 
        number={listaPlatos[i].cantidad}/>)
    })
    return (<div>{list}</div>)
}
export default PlateList