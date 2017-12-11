import React from 'react';
import App from './App.js';
import { shallow} from 'enzyme';

// jest.mock('../helper/helper.js');

let renderedApp;

const mockEvent = { preventDefault: jest.fn() }

const mockCharacter = [
  {
    name: 'Luke Skywalker',
    favorite: true,
    info: {
      Homeworld: "Tatooine",
      Language: "Galactic Basic",
      Population: 200000,
      Species: 'Human'
    }
  }
]


describe('App test', () =>{
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

  it('should render with the correct default', () => {
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

  it('should have a default category of character and change categories when function called', async () =>{
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

});
