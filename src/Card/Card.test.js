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

  const mockInfoThree = {
    Class: 'wheeled',
    Model: 'Digger Crawler',
    Passengers: '30'
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
  });

  it('should match the snapshot', () =>{
    expect(renderedCard).toMatchSnapshot()
  });

  it('should render an empty star image if the item is not a favorite', () =>{
    expect(renderedCard.containsMatchingElement(<img src="fav-star-empty.png" className="favorite-star" alt="not favorite" />)).toEqual(true);

  });
  it('should render a full star image if the item is a favorite', () =>{
    const renderedCard2 = shallow(
      <Card 
        name = 'Digger Crawler'
        info = {mockInfoThree}
        favorite = {true}
        addFavorite = {mockAddFavorite} /> );
 
    expect(renderedCard2.containsMatchingElement(<img src = "fav-star-full.png" className = "favorite-star" alt = "favorite" />)).toEqual(true);
   });

it ('should render the number of list items as there are pieces of info', () =>{
  expect(renderedCard.find('li').length).toEqual(4);
  const renderedCard2 = shallow(
      <Card 
        name = 'Digger Crawler'
        info = {mockInfoThree}
        favorite = {true}
        addFavorite = {mockAddFavorite} /> );
  expect(renderedCard2.find('li').length).toEqual(3);
})

it('should call the add favorite function if the favorite div is clicked', () =>{
  expect(mockAddFavorite.mock.calls.length).toEqual(0);
  renderedCard.find('.fav').simulate('click');
  expect(mockAddFavorite.mock.calls.length).toEqual(1);
})

});




