import React from 'react';
import Controls from './Controls.js';
import {shallow} from 'enzyme';

const mockClickFunction = jest.fn();

const mockFavorites = [
  {
    name: 'Sand Crawler',
    favorite: false,
    info: {
      Class: 'Wheeled',
      Model: 'Digger Crawler',
      Passengers: '30'
    }
  },
  {
    name: "X-34 landspeeder",
    favorite: true,
    info: {
      Class: "repulsorcraft",
      Model: "X-34 landspeeder",
      Passengers: "1"
    }
  }
];

let wrapper;

describe('Controls', () =>{
  beforeEach(() =>{
    wrapper = shallow(
      <Controls
        clickCategory = {mockClickFunction}
        favorites = {mockFavorites}
      />);
  });

  it('should render correctly', () =>{
    expect(wrapper).toBeDefined();
  });

  it('should have four buttons', () =>{
    expect(wrapper.find('button').length).toEqual(4);
  });

  it('should call the click function if a button is pressed', () =>{
    expect(mockClickFunction.mock.calls.length).toEqual(0);
    wrapper.find('.planet').simulate('click');
    expect(mockClickFunction.mock.calls.length).toEqual(1);
    wrapper.find('.character').simulate('click');
    expect(mockClickFunction.mock.calls.length).toEqual(2);
  });

  it('No. 2 displays on favorite button if two favorites', () =>{
    expect(wrapper.find('.favorite').text()).toEqual('Favorites: 2');
  });
 
  it('should give the buttons a class of active when clicked', () =>{
    expect(wrapper.find('.character').hasClass('active')).toEqual(true);
    expect(wrapper.find('.planet').hasClass('active')).toEqual(false);
    
    wrapper.find('.planet').simulate('click');
    
    expect(wrapper.find('.character').hasClass('active')).toEqual(false);
    expect(wrapper.find('.planet').hasClass('active')).toEqual(true);
  });


});