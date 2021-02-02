import listaCategorias from "../categorias.js"
import NewList from "./List.js"


const Category = (props) => {
    return (
        <div id={props.name} className="cardSlider" onClick={NewList}>
            <img src={props.img} alt={props.name}/>
            <p>{props.name}</p>
        </div>
)}

const CategoryList = () =>{
    let List = listaCategorias.map((category, i) => {return <Category key={i} img={category.imgCategoria} name={category.nombreCategoria}/>})
    return (
            <div>
            {List}    
            </div>
        );
}

export default CategoryList