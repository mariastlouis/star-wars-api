import React from 'react';
import App from './App.js';
import { shallow } from 'enzyme';


let renderedApp;

const mockFavorite = [
  {
    name: 'Luke Skywalker',
    favorite: true,
    info: {
      Homeworld: "Tatooine",
      Language: "Galactic Basic",
      Population: 200000,
      Species: 'Human'
    }
  },
  {
    name: 'Leia Organa',
    favorite: true,
    info: {
      Homeworld: "Alderaan",
      Language: "Galactic Basic",
      Population: 200000000,
      Species: 'Human'
    }
  }
];

const mockCharacter = [
  {
    name: 'C-3P0',
    favorite: false,
    info: {
      Homeworld: "Tatooine",
      Language: "N/A",
      Population: 200000,
      Species: 'Droid'
    }
  }
];

describe('App state test', () =>{
  beforeEach(() =>{
    renderedApp = shallow(<App />, {disableLifecycleMethods: true});
  });

  it('should render correctly', () =>{
    expect(renderedApp).toBeDefined();
  });

  it('should start with a loading background while the data is loading', () =>{
    expect(renderedApp.containsMatchingElement(
      <img src="loading-background.png" />))
      .toEqual(true);
  });

  it('should render with the correct default state', () => {
    const expectedState = {
      "category": "character",
      "character": null,
      "favorite": [],
      "movieCrawl": null,
      "planet": [], 
      "vehicle": []
    };
    expect(renderedApp.state()).toEqual(expectedState);
  });

  it('should change categories when function called', async () =>{
    await renderedApp.update();
    expect(renderedApp.state('category')).toEqual('character');
    await renderedApp.instance().clickCategory('planet');
    expect(renderedApp.state('category')).toEqual('planet');
  });

  it('should set the state of the category clicked', async ()=>{
    await renderedApp.update();

    expect(renderedApp.state('planet').length).toEqual(0);
   
    await renderedApp.instance().clickCategory('planet');
   
    expect(renderedApp.state('planet').length).toEqual(10);

    expect(renderedApp.state('vehicle').length).toEqual(0);

    await renderedApp.instance().clickCategory('vehicle');

    expect(renderedApp.state('vehicle').length).toEqual(10);

  });

  it('should have 2 favorites if 2 in favorite state', async() =>{
    await renderedApp.update();
    renderedApp.setState({favorite: mockFavorite});
    expect(renderedApp.state('favorite').length).toEqual(2);
  });

  it('should have 3 favorites if another is added', async() =>{
    await renderedApp.update();

    renderedApp.setState({favorite: mockFavorite, character: mockCharacter});
    expect(renderedApp.state('favorite').length).toEqual(2);
    await renderedApp.instance().addFavorite('C-3P0', 'character');
 
    expect(renderedApp.state('favorite').length).toEqual(3);
  });

});



