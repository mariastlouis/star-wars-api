import React from 'react';
import Card from './Card.js';
import {shallow} from 'enzyme';

const mockAddFavorite = jest.fn();
const mockInfo= 
  {
   Species: 'Human',
    Language: 'Galactic Basic',
    Homeworld: 'Tatooine',
    Population: 200000
  }

  let renderedCard;

  describe('Card', () =>{
    beforeEach(() => {
      renderedCard = shallow(
        <Card 
          name = 'Luke Skywalker'
          info = {mockInfo}
          favorite = {false}
          addFavorite = {mockAddFavorite}
        />);
    });

    it('should render corrrectly', () => {
      expect(renderedCard).toBeDefined();
    });

  it('should have class of card head and fav an have an h2 element', () =>{
    expect(renderedCard.find('.card-head').length).toEqual(1);
    expect(renderedCard.find('h2').length).toEqual(1); 
    expect(renderedCard.find('.fav').length).toEqual(1);
  })

  it.skip('should render a fullstar image if the item is favorited'), () =>{

  }

});



