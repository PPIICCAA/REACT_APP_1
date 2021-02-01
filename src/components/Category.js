import listaCategorias from "../categorias.js"

const Category = (props) => {
    return (
        <div id={props.name} className="cardSlider">
            <img src={props.img} alt={props.name}/>
            <p>{props.name}</p>
        </div>
)}

const CategoryList = () =>{
    let List = listaCategorias.map((category, i) => {return <Category key={i}img={category.imgCategoria} name={category.nombreCategoria}/>})
    return (
            <div>
            {List}    
            </div>
        );
}

export default CategoryList