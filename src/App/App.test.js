import React from 'react';
import App from './App.js';
import { shallow} from 'enzyme';

// jest.mock('../helper/helper.js');

let renderedApp;



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

  it('should set the state of the planets when the planet button is clicked',
    async () =>{
      expect(renderedApp.state('vehicle').length).toEqual(0);
      await renderedApp.instance().clickCategory('vehicle');

      await expect(renderedApp.state('vehicle').length).toEqual(10);
    });

});
