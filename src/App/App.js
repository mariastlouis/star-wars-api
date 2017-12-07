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
      character: [],
      vehicle: [],
      category: 'character'
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
    this.setState({category: 'character'})
  } else if (category === 'planet') {
    this.setState({category: 'planet'})
     this.getPlanet()
  } else if (category === 'vehicle') {
    this.getVehicle()
    this.setState({category: 'vehicle'})
  } else {
    console.log('error')
  }
}



componentDidMount(){
  this.loadMovieArray()
  this.getCharacter()
 
  }

async getVehicle () {
  const vehicleFetch = await fetch('https://swapi.co/api/vehicles/')
  const vehicleData = await vehicleFetch.json()
  const vehicle = await this.fetchVehicleData(vehicleData.results)
  this.setState({vehicle})
}

fetchVehicleData(vehicleData) {
  return vehicleData.map(vehicle =>{
    return {
      name: vehicle.name,
      data: {
        Model: vehicle.model,
        Class: vehicle.vehicle_class,
        Passengers: vehicle.passengers
      }
    }
    })
  
}

async getPlanet () {
  const planetFetch = await fetch('https://swapi.co/api/planets/')
  const planetData = await planetFetch.json();
  const planet = await this.fetchPlanetData(planetData.results);
  this.setState({planet})
}

fetchPlanetData(planetData) {
  const unresolvedPromises = planetData.map(async(planet) =>{
    return {
      name: planet.name,
      data: {
        Climate: planet.climate,
        Population: planet.population
      }
    }
  })
  return Promise.all(unresolvedPromises)
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
          Species: speciesData.name,
          Language: speciesData.language,
          Homeworld: homeworldData.name,
          Population: homeworldData.population,
        }
      }
    });

    return Promise.all(unresolvedPromises)
  }




  
  render() {
    const {category, film} = this.state;
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
        { this.state[category] &&
        <CardContainer category = {category} data = {this.state[category]} />
        }
      </div>
    );
  }
}

export default App;
