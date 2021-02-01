class TotalSuma extends React.Component {
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

        return (
            <div className="footer">
                <h2>TOTAL: </h2>
                <p> {total + (total * this.state.tasas)}€</p>
            </div>
        )
    }
}

class TotalResta extends React.Component {
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
            
        return (
            <div className="footer">
                <h2>TOTAL: </h2>
                <p>{Object.keys(localStorage).length == 0 ? 0 : total + (total * this.state.tasas)}€</p>
            </div>
        )
    }
}