const Plate = (props) => {
    return (
        <div className="elemento">
        <img src={props.img}/>
        <div className="texto ">
            <p>{props.precioPlato}€</p>
            <h5>{props.nombrePlato}</h5>
            <h6>{props.descripcionPlato}</h6>
        </div>
        <Contador index={props.id} counter={props.number}/>
    </div>
    )
}
class PlateList extends React.Component {
    render(){
        return (<div>{listaPlatos.map((plate, i) =>{
            return <Plate key={i} img={plate.imgPLato} precioPlato={plate.precioPlato} nombrePlato={plate.nombrePlato} descripcionPlato={plate.descripcionPlato} id={listaPlatos[i].id} number={listaPlatos[i].cantidad}/>
        })}</div>)
    }
}
ReactDOM.render( <PlateList />, document.getElementById("list"));