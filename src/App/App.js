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
      people: []
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


async componentDidMount(){
  this.loadMovieArray()
   const peoplelFetch = await fetch('https://swapi.co/api/people/')
    const peopleData  = await peoplelFetch.json()
    const people = await this.fetchPlanetSpecies(peopleData.results);
    this.setState({people})
  }


fetchPlanetSpecies(peopleData) {
    const unresolvedPromises = peopleData.map(async(people) => {
      let homeworldFetch = await fetch(people.homeworld)
      let homeworldData = await homeworldFetch.json()
      let speciesFetch = await fetch(people.species)
      let speciesData = await speciesFetch.json()

      return {
        name: people.name,
        data: {
          homeworld: homeworldData.name,
          species: speciesData.name,
          language: speciesData.language,
          population: homeworldData.population
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
        <Controls />
      </div>
    );
  }
}

export default App;
