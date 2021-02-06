import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import CategoryList from "./components/Category.js"
import PlateList from "./components/PlateList.js"
import InputNormal from "./components/InputNor.js"
import Items from "./components/Push.js"
import Price from "./components/Price.js"

function App() {
    return (
      <Router>
        <ModelSwitch />
      </Router>
    );
}


function ModelSwitch() {
    return (
        <Switch>
            <Route exact path="/" children={<Main />} />
            <Route path="/cash" children={<Cash />} />
        </Switch>
    )
}

function Main() {
    return (
        <div>
        <header>
            <div>
                <h1>Food For Home</h1>
                <img className="logo" src="./img/logo.png" alt=""></img>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </header>
            <main>
                <div id="slider"><CategoryList /></div>
                <div id="list"><PlateList /></div>
            </main>
            <footer>
            <button className="botonCarrito">
                <NavLink to="/cash">
                <img src="./img/bolsa.svg" className="imgboton" alt=""></img>
                </NavLink>
            </button>

            <div className="price"><InputNormal /></div>
            </footer>
        </div>
    )
}

function Cash () {
    return (
        <div>
        <header id="header">
        <div>
            <button className="return">
            <NavLink to="/"><img src="./img/flechita.png" alt="return" /></NavLink>
            </button>
        </div>
        <div>
            <h3>My Cart</h3>
        </div>
        </header>
        <main>
            <div id="pushList" className="elementosMenu2"><Items /></div>
        </main>
        <footer className="desglosePrecio">
            <div className="precio">
                <div className="columnaTexto">
                    <p>Subtotal</p>
                    <p>Tasas</p>
                    <p>Delivery</p>
                    <p>TOTAL</p>
                </div>
                <div id="price"><Price /></div>
            </div>
            <button className="boton2" /*</footer>onclick="window.location.href='https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fmyaccount%2Fmoney&state=%2F'"*/>Enviar pedido</button>
        </footer>
    </div>
    )
}
export default App