import React, { Component } from 'react';
import './App.css';
import Controls from '../Controls/Controls.js'
import QuoteScroll from '../QuoteScroll/QuoteScroll.js'
import fetchMovieCrawl from '../helper.js'

class App extends Component {
  constructor () {
    super ();
    this.state ={
      movieCrawl:[],
      character: []
    }
    this.loadMovieArray.bind(this)
     this.setRandomMovie = this.setRandomMovie.bind(this);
  }
  
loadMovieArray() {
  fetchMovieCrawl()
  .then(movies => this.setState({
    movieCrawl: movies
  }, () => this.setRandomMovie()));
}

setRandomMovie() {
  const movieIndex = Math.floor(Math.random() * ((7 - 1) + 1)) + 1;
  if (this.state.movieCrawl[movieIndex]){
    return this.state.movieCrawl[movieIndex];
  }
    return this.setRandomMovie;
  }


  // componentDidMount() {
  //   fetch('http://localhost:3001/api/frontend-staff')
  //     .then(response => response.json())
  //     .then(({bio}) => this.fetchBio(bio))
  //     .then(staff => this.setState({staff}))
  // }

  // fetchBio(arrayOfStaff) {
  //   const unresolvedPromises = arrayOfStaff.map(staffMember => {
  //     return fetch(staffMember.info).then(response => response.json())
  //             .then(staffBio => Object.assign({}, {name: staffMember.name}, staffBio))
  //   })
  //   return Promise.all(unresolvedPromises)
  // }

componentDidMount(){
  this.loadMovieArray()
  fetch('https://swapi.co/api/people/')
  .then(response => response.json())
  .then(arrayOfCharacters => this.fetchCharacters(arrayOfCharacters.results)).then(character => {
     debugger;
  })
}

fetchCharacters(arrayOfCharacters) {
  const unresolvedPromises = arrayOfCharacters.map(character =>{
    return fetch (character.homeworld).then(response => response.json())
    .then(homeworld =>{
     return Object.assign({}, {name: character.name}, {homeworld: homeworld.name}, {population: homeworld.population})
    
    })
  })
  return Promise.all(unresolvedPromises)
 
}

  
  render() {
    return (
      <div className="App">
      <div className = "header">
        <h1> Star Wars Data </h1>
      </div>
      {
        this.state.movieCrawl.length !== 0 &&
        <QuoteScroll movie = {this.setRandomMovie()}/>
      }
        <Controls />
      </div>
    );
  }
}

export default App;
