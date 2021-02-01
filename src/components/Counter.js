class Contador extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            counter: JSON.parse(localStorage.getItem(this.props.index)) || this.props.counter 
        }
    }
    resta = () => {
        ReactDOM.render( <TotalResta />, document.querySelector(".price"));
        localStorage.setItem(this.props.index, this.state.counter - 1)
        if (localStorage.getItem(this.props.index) >= 0){
            this.setState((state) => {
            return {counter: this.state.counter - 1} 
        })}
        if (this.state.counter <= 1 ){
            localStorage.removeItem(this.props.index)
        }
    }
    suma = () => {
        ReactDOM.render( <TotalSuma />, document.querySelector(".price"));
        localStorage.setItem(this.props.index, this.state.counter + 1)
        this.setState((state) => {
            return {counter: state.counter + 1}
        })
    }
    render(){
        return (
        <div className="contador" data-numero={this.props.index}>
            <button onClick={this.resta} className="resta">-</button>
            <p className="quantity">{localStorage.getItem(this.props.index) ||this.state.counter}</p>
            <button  onClick={this.suma} className="suma">+</button>
        </div>
        )
    }
}