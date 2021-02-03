import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './cash.css';
import CategoryList from "./components/Category.js"
import PlateList from "./components/PlateList.js"
import InputNormal from "./components/InputNor.js"
import App from './App.js';
import Items from "./components/Push.js"
import Price from "./components/Price.js"


ReactDOM.render(<App />,document.getElementById('contain'));
ReactDOM.render( <CategoryList />, document.getElementById("slider"));
ReactDOM.render( <PlateList />, document.getElementById("list"));
ReactDOM.render( <InputNormal />, document.querySelector(".price"));

// Cash
ReactDOM.render( <Price />, document.getElementById("price"));
ReactDOM.render( <Items />, document.getElementById("pushList"));