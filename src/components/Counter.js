import React from 'react';
import ReactDOM from 'react-dom';
import InputAumentar from "./InputAum"
import InputDisminuir from "./InputDis"

class Contador extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            counter: JSON.parse(localStorage.getItem(this.props.index)) || this.props.counter 
        }
        this.toggleresta = this.toggleresta.bind(this);
        this.togglesuma = this.togglesuma.bind(this);
    }
    toggleresta() {
        ReactDOM.render( <InputDisminuir />, document.querySelector(".price"));
        localStorage.setItem(this.props.index, this.state.counter - 1)
        if (localStorage.getItem(this.props.index) >= 0){
            this.setState((state) => {
            return {counter: state.counter - 1} 
        })}
        if (this.state.counter <= 1 ){
            localStorage.removeItem(this.props.index)
        }
    }
    togglesuma() {
        ReactDOM.render( <InputAumentar />, document.querySelector(".price"));
        localStorage.setItem(this.props.index, this.state.counter + 1)
        this.setState((state) => {
            return {counter: state.counter + 1}
        })
    }
    render(){
        let quantity = localStorage.getItem(this.props.index) ||this.state.counter
        return (
        <div className="contador" data-numero={this.props.index}>
            <button onClick={this.toggleresta} className="resta">-</button>
            <p className="quantity">{quantity}</p>
            <button  onClick={this.togglesuma} className="suma">+</button>
        </div>
        )
    }
}
export default Contador