import React from 'react';
import CardContainer from './CardContainer.js';
import {shallow} from 'enzyme';

const mockAddFavorite = jest.fn();

const mockVehicleInfo = [
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

const mockCategory = 'vehicle';

let wrapper;

describe('Card Container', () => {
  beforeEach(() => {
   
    wrapper = shallow(
      <CardContainer 
        category = {mockCategory}
        info = {mockVehicleInfo}
        addFavorite = {mockAddFavorite}
      />);
  });

  it('should render correctly', () =>{
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot();
  });

  it('should render 2cards if the array length is 2', () =>{
    expect(wrapper.find('Card').length).toEqual(2);
  });

});