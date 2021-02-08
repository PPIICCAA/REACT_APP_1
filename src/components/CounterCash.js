import React from 'react';
import ReactDOM from 'react-dom';
import FooterDisminuir from "./FooterDis.js"
import FooterAumentar from "./FooterAum.js"
import Items from "./Push.js"

class Contador extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            counter: JSON.parse(localStorage.getItem(this.props.index))
        }
        this.toggleresta = this.toggleresta.bind(this);
        this.togglesuma = this.togglesuma.bind(this);
    }
    toggleresta() {
        ReactDOM.render( <FooterDisminuir />, document.getElementById("price"));
        localStorage.setItem(this.props.index, this.state.counter - 1)
        if (localStorage.getItem(this.props.index) >= 0 && this.state.counter >= 1){
            this.setState((state) => {
            return {counter: state.counter - 1} 
        })}
        if (this.state.counter === 1){
            localStorage.removeItem(this.props.index)
            ReactDOM.render( <Items />, document.getElementById("pushList"));
            ReactDOM.render( <FooterDisminuir />, document.getElementById("price"));
        }
    }
    togglesuma() {
        ReactDOM.render( <FooterAumentar />, document.getElementById("price"));
        localStorage.setItem(this.props.index, this.state.counter + 1)
        this.setState((state) => {
            return {counter: state.counter + 1}
        })
    }
    render(){
        let quantity = localStorage.getItem(this.props.index)
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