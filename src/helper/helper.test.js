import helperFunctions from './helper';
const  { fetchMovieCrawl, getVehicle, getPlanet, getCharacter }
  = helperFunctions;
import {mockFilmApiResponse,
  mockVehicleApiResponse,
  mockPeopleApiResponse,
  mockPlanetApiResponse} from './_mocks_/MockApiResponse.js';

      
describe('fetch movie crawl', () =>{
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => 
      Promise.resolve(
        mockFilmApiResponse
      )
  })
  );

  it('should be a function', () =>{
    expect(fetchMovieCrawl).toBeAFunction;

  });

  it('should render the fetch data', async () =>{
    const fetch = await fetchMovieCrawl();
    expect(typeof fetch).toEqual('object');
  });

  it('fetch movie crawl is called with the correct params', async () => {
    const expected = [
      'https://swapi.co/api/films/'
    ];
    await fetchMovieCrawl();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});

describe('get vehicle', () =>{
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => 
      Promise.resolve(
        mockVehicleApiResponse
      )
  })
  );

  it('should be a function', () =>{
    expect(getVehicle).toBeAFunction;
    
  });

  it('should render the fetch data', async () =>{
    const fetch = await getVehicle();
    expect(typeof fetch).toEqual('object');
  });

  it('should be called with the correct parameters', async () => {
    const expected = [
      'https://swapi.co/api/vehicles/'
    ];
    await getVehicle();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

});

describe('get people', () =>{ 
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => 
      Promise.resolve(
        mockPeopleApiResponse
      )
  })
  );

  it('should be a function', () =>{
    expect(getCharacter).toBeAFunction;
  });

  it('should render the fetch data', async () =>{
    const fetch = await getCharacter();
    expect(typeof fetch).toEqual('object');
  });

  it('should be called with the correct parameters', async () => {
    const expected = [
      'https://swapi.co/api/people/'
    ];
    await getCharacter();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

});


describe('get planets', () =>{ 
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => 
      Promise.resolve(
        mockPlanetApiResponse
      )
  })
  );

  it('should be a function', () =>{
    expect(getPlanet).toBeAFunction;
  });

  it('should render the fetch data', async () =>{
    const fetch = await getPlanet();
    expect(typeof fetch).toEqual('object');
  });

});


