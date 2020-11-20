import React, { Component } from 'react';
import './App.css';


function Cat(props) {
    return (
        <div className="cat">
         <p style={{ fontSize: "20px", fontWeight: "bold"}}>{props.name}</p>
         <p>{props.type}</p>
         <p>{props.age}</p>
         <p>{props.gender}</p>
        </div>
    );
}

export default Cat;