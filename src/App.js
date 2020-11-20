// When you type the letter in the form field 
// it filters the name of the cat that includes the letter.

import React, { Component } from 'react';
import './App.css';
import CatList from './CatList';
import SearchBox from './SearchBox';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        cats: [
          {id: 1, name: "Kivo", type: "Tiger", age: 7, gender: "male"},
          {id: 2, name: "Masha", type: "Lion", age: 4, gender: "female"},
          {id: 3, name: "Lena", type: "Black Panther", age: 5, gender: "female"},
          {id: 4, name: "Thor", type: "Cheetah", age: 6, gender: "male"},
          {id: 5, name: "Winky", type: "Snow Leopard", age: 12, gender: "female"}
        ],
        searchCat: ''
      }
    }

    handleInput = (event) => {
       this.setState({ searchCat: event.target.value })
    }

  render() {
    let filteredCats = this.state.cats.filter((cat) => {
      return cat.name.toUpperCase().includes(this.state.searchCat.toUpperCase())
    })


    return (
      <div className="App">
        <SearchBox handleInput={this.handleInput} />
        <CatList filteredCats={filteredCats} />
      </div>
    );
  }
}

export default App;