import React, { Component } from 'react';
import Cat from './Cat';

function CatList(props) {

    let cats = props.filteredCats.map((cat, i) => {
      return <Cat key={i} name={cat.name} type={cat.type} age={cat.age} gender={cat.gender} />
    })

    return (
        <div className="cats mt-4">
         {cats}
        </div>
    );
}

export default CatList;
