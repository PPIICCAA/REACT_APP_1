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
    }
    resta = () => {
        ReactDOM.render( <FooterDisminuir />, document.getElementById("price"));
        localStorage.setItem(this.props.index, this.state.counter - 1)
        if (localStorage.getItem(this.props.index) >= 0 && this.state.counter >= 1){
            this.setState((state) => {
            return {counter: this.state.counter - 1} 
        })}
        if (this.state.counter === 1){
            localStorage.removeItem(this.props.index)
            ReactDOM.render( <Items />, document.getElementById("pushList"));
            ReactDOM.render( <FooterDisminuir />, document.getElementById("price"));
        }
    }
    suma = () => {
        ReactDOM.render( <FooterAumentar />, document.getElementById("price"));
        localStorage.setItem(this.props.index, this.state.counter + 1)
        this.setState((state) => {
            return {counter: state.counter + 1}
        })
    }
    render(){
        return (
            <div className="contador" data-numero={this.props.index}>
            <button onClick={this.resta} className="resta">-</button>
            <p className="quantity">{localStorage.getItem(this.props.index)}</p>
            <button  onClick={this.suma} className="suma">+</button>
        </div>
        )
    }
}
export default Contador