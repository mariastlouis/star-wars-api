import React, { Component } from 'react';
import './App.css';
import Controls from '../Controls/Controls.js';
import QuoteScroll from '../QuoteScroll/QuoteScroll.js';
import  { fetchMovieCrawl, getVehicle, getPlanet, getCharacter }
  from '../helper.js';

import CardContainer from '../CardContainer/CardContainer.js';

class App extends Component {
  constructor () {
    super();
    this.state ={
      movieCrawl:[],
      character: [],
      vehicle: [],
      planet: [],
      favorite: [],
      category: 'character'
    };
    this.loadMovieArray = this.loadMovieArray.bind(this);
    this.setRandomMovie = this.setRandomMovie.bind(this);
    this.clickCategory = this.clickCategory.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
  }
  
  async loadMovieArray() {
    const movies = await fetchMovieCrawl();
    this.setState({movieCrawl: movies});
  }

  setRandomMovie() {
    const movieIndex = Math.floor(Math.random() * ((7 - 1) + 1)) + 1;
    if (this.state.movieCrawl[movieIndex]){
      return this.state.movieCrawl[movieIndex];
    }
    return this.setRandomMovie;
  }

  async clickCategory(category) {
    if (category === 'character') {
      const character = await getCharacter();
      this.state.character.length > 0 ?
        this.setState({category}) : 
        this.setState({category, character});

    } else if (category === 'planet') {
      const planet = await getPlanet();
      this.state.planet.length > 0 ?
        this.setState({category}) : 
        this.setState({category, planet});
        
    } else if (category === 'vehicle') {
      const vehicle = await getVehicle();
      this.state.vehicle.length > 0 ? 
        this.setState({category}) : 
        this.setState({category, vehicle});

    } else if (category === 'favorite'){
      this.setState({category});

    } else {
      this.setState({category});
    }
  }


  async componentDidMount(){
    await this.loadMovieArray();
    const character = await getCharacter();
    this.setState({category: 'character', character});
  }

  addFavorite(name, category){
     
    const findCategory = this.state[category];
    const findFavorite = findCategory.find(info => info.name === name);
    findFavorite.favorite = !findFavorite.favorite;
     
    const newFavorite = findFavorite.favorite ?
      [...this.state.favorite, findFavorite] :
      this.state.favorite.filter(fav => fav.name !== name);
    this.setState({favorite: newFavorite});
    
  }  


  render() {
    const {category} = this.state;
    return (
      <div className="App">
        <div className = "header">
          <h1> Star Wars Data </h1>
        </div>
        {
          this.state.movieCrawl.length !== 0 &&
        <QuoteScroll movie = {this.setRandomMovie()}/>
        }
        <Controls clickCategory = {this.clickCategory}
          favorites = {this.state.favorite} />
        
        { this.state[category] &&
          <CardContainer category = {category} 
            info = {this.state[category]} 
            addFavorite = {this.addFavorite}  />
        }
      </div>
    );
  }
}

export default App;
