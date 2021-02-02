import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CategoryList from "./components/Category.js"
import PlateList from "./components/PlateList.js"
import InputNormal from "./components/InputNor"

ReactDOM.render( <CategoryList />, document.getElementById("slider"));
ReactDOM.render( <PlateList />, document.getElementById("list"));
ReactDOM.render( <InputNormal />, document.querySelector(".price"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
