import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Yelp } from './util/yelp';

import { SearchBar } from './components/SearchBar/SearchBar.js';


import { BusinessList } from './components/BusinessList/BusinessList.js';

class App extends Component {

  constructor(){
    super();
    this.state = {
      businesses: []
    }

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term,location,sortBy){
    
    Yelp.search(term,location,sortBy).then(businesses => {
      this.setState({
        businesses: businesses
      })
    })

  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={ this.state.businesses }/>
      </div>
    );
  }
}

export default App;
