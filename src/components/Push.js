import React from 'react';
import ItemsPush from './Delete';


class Items extends React.Component {
render() {
    const array = Object.keys(localStorage)
    return (<div className="list">{array.map((value, index) => {
        return <ItemsPush index={value} key={index} number={localStorage.getItem(value)}/>
    })}</div>)
}
}
export default Items