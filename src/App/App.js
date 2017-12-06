import React, { Component } from 'react';
import './App.css';
import Controls from '../Controls/Controls.js'
import QuoteScroll from '../QuoteScroll/QuoteScroll.js'
import fetchMovieCrawl from '../helper.js'
import CardContainer from '../CardContainer/CardContainer.js'

class App extends Component {
  constructor () {
    super ();
    this.state ={
      movieCrawl:[],
      character: []
    }
    this.loadMovieArray.bind(this)
     this.setRandomMovie.bind(this);
     this.clickCategory = this.clickCategory.bind(this)
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

clickCategory(category) {
  if (category === 'character') {
    this.getCharacter()
  } else if (category === 'planet') {
    console.log('planet data clicked')
  } else if (category === 'vehicle') {
    console.log('vehicle data clicked')
  } else {
    console.log('error')
  }
}




componentDidMount(){
  this.loadMovieArray()
  
  }

async getCharacter () {
const peoplelFetch = await fetch('https://swapi.co/api/people/')
    const peopleData  = await peoplelFetch.json()
    const character = await this.fetchPlanetSpecies(peopleData.results);
    this.setState({character})
}

fetchPlanetSpecies(peopleData) {
    const unresolvedPromises = peopleData.map(async(character) => {
      let homeworldFetch = await fetch(character.homeworld)
      let homeworldData = await homeworldFetch.json()
      let speciesFetch = await fetch(character.species)
      let speciesData = await speciesFetch.json()

      return {
        name: character.name,
        data: {
          homeworld: homeworldData.name,
          species: speciesData.name,
          language: speciesData.language,
          population: homeworldData.population,
          category: character
        }
      }
    });

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
        <Controls clickCategory = {this.clickCategory} />
        <CardContainer characterArray = {this.state.character}/>
       
      </div>
    );
  }
}

export default App;
