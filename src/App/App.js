import React, { Component } from 'react';
import './App.css';
import Controls from '../Controls/Controls.js'
import QuoteScroll from '../QuoteScroll/QuoteScroll.js'
import fetchMovieCrawl from '../helper.js'

class App extends Component {
  constructor () {
    super ();
    this.state ={
      movieCrawl:[]
    }
    this.loadMovieArray.bind(this)
  }
  
loadMovieArray() {
  fetchMovieCrawl()
  .then(movies => this.setState({
    movieCrawl: movies
  }))
}

componentDidMount(){
  this.loadMovieArray()
}
  
  render() {
    return (
      <div className="App">
      <div className = "header">
        <h1> Star Wars Data </h1>
      </div>
      {
        this.state.movieCrawl.length !== 0 &&
        <QuoteScroll movie = {this.state.movieCrawl[1]}/>
      }
        <Controls />
      </div>
    );
  }
}

export default App;
