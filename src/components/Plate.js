import Contador from "./Counter"

const Plate = (props) => {
    return (
        <div className="elemento">
        <img src={props.img} alt={props.nombrePlato}/>
        <div className="texto ">
            <p>{props.precioPlato}€</p>
            <h5>{props.nombrePlato}</h5>
            <h6>{props.descripcionPlato}</h6>
        </div>
        <Contador index={props.id} counter={props.number}/>
    </div>
    )
}
    
export default Plate