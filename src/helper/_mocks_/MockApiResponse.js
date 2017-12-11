export const mockPlanetApiResponse = {
  count: 61,
  next: "https://swapi.co/api/planets/?page=2",
  previous: null,
  results: [
    {
      climate: "temperate",
      created: "2014-12-10T11:35:48.479000Z",
      diameter: "12500",
      edited: "2014-12-20T20:58:18.420000Z",
      films: [ "https://swapi.co/api/films/6/", "https://swapi.co/api/films/1/" ],
      gravity: "1 standard",
      name: "Alderaan",
      orbital_period: "364",
      population: "2000000000",
      residents: [ "https://swapi.co/api/people/5/", "https://swapi.co/api/people/68/", "https://swapi.co/api/people/81/" ],
      rotation_period: "24",
      surface_water: "40",
      terrain: "grasslands, mountains",
      url: "https://swapi.co/api/planets/2/"
    }
  ]
};

export const mockVehicleApiResponse = {
  count: 39,
  next: "https://swapi.co/api/vehicles/?page=2",
  previous: null,
  results: [
    {
      cargo_capacity: "50000",
      consumables: "2 months",
      cost_in_credits: "150000",
      created: "2014-12-10T15:36:25.724000Z",
      crew: "46",
      edited: "2014-12-22T18:21:15.523587Z",
      films: [ "https://swapi.co/api/films/5/", "https://swapi.co/api/films/1/" ],
      length: "36.8",
      manufacturer: "Corellia Mining Corporation",
      max_atmosphering_speed: "30",
      model: "Digger Crawler",
      name: "Sand Crawler",
      passengers: "30",
      pilots: [],
      url: "https://swapi.co/api/vehicles/4/",
      vehicle_class: "wheeled"
    }
  ]
};

export const mockFilmApiResponse = {results: [{
  "title": "Return of the Jedi", 
  "episode_id": 6, 
  "opening_crawl": "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\n\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\n\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...", 
  "director": "Richard Marquand", 
  "producer": "Howard G. Kazanjian, George Lucas, Rick McCallum", 
  "release_date": "1983-05-25", 
  "characters": [
      "https://swapi.co/api/people/1/", 
      "https://swapi.co/api/people/2/", 
      "https://swapi.co/api/people/3/", 
      "https://swapi.co/api/people/4/", 
      "https://swapi.co/api/people/5/", 
      "https://swapi.co/api/people/10/", 
      "https://swapi.co/api/people/13/", 
      "https://swapi.co/api/people/14/", 
      "https://swapi.co/api/people/16/", 
      "https://swapi.co/api/people/18/", 
      "https://swapi.co/api/people/20/", 
      "https://swapi.co/api/people/21/", 
      "https://swapi.co/api/people/22/", 
      "https://swapi.co/api/people/25/", 
      "https://swapi.co/api/people/27/", 
      "https://swapi.co/api/people/28/", 
      "https://swapi.co/api/people/29/", 
      "https://swapi.co/api/people/30/", 
      "https://swapi.co/api/people/31/", 
      "https://swapi.co/api/people/45/"
  ], 
  "planets": [
      "https://swapi.co/api/planets/5/", 
      "https://swapi.co/api/planets/7/", 
      "https://swapi.co/api/planets/8/", 
      "https://swapi.co/api/planets/9/", 
      "https://swapi.co/api/planets/1/"
  ], 
  "starships": [
      "https://swapi.co/api/starships/15/", 
      "https://swapi.co/api/starships/10/", 
      "https://swapi.co/api/starships/11/", 
      "https://swapi.co/api/starships/12/", 
      "https://swapi.co/api/starships/22/", 
      "https://swapi.co/api/starships/23/", 
      "https://swapi.co/api/starships/27/", 
      "https://swapi.co/api/starships/28/", 
      "https://swapi.co/api/starships/29/", 
      "https://swapi.co/api/starships/3/", 
      "https://swapi.co/api/starships/17/", 
      "https://swapi.co/api/starships/2/"
  ], 
  "vehicles": [
      "https://swapi.co/api/vehicles/8/", 
      "https://swapi.co/api/vehicles/16/", 
      "https://swapi.co/api/vehicles/18/", 
      "https://swapi.co/api/vehicles/19/", 
      "https://swapi.co/api/vehicles/24/", 
      "https://swapi.co/api/vehicles/25/", 
      "https://swapi.co/api/vehicles/26/", 
      "https://swapi.co/api/vehicles/30/"
  ], 
  "species": [
      "https://swapi.co/api/species/1/", 
      "https://swapi.co/api/species/2/", 
      "https://swapi.co/api/species/3/", 
      "https://swapi.co/api/species/5/", 
      "https://swapi.co/api/species/6/", 
      "https://swapi.co/api/species/8/", 
      "https://swapi.co/api/species/9/", 
      "https://swapi.co/api/species/10/", 
      "https://swapi.co/api/species/15/"
  ], 
  "created": "2014-12-18T10:39:33.255000Z", 
  "edited": "2015-04-11T09:46:05.220365Z", 
  "url": "https://swapi.co/api/films/3/"
}]};

export const mockPeopleApiResponse = {
  count: 87,
  next: "https://swapi.co/api/people/?page=2",
  previous: null,
  results: [
    {
      birth_year: "19BBY",
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      eye_color: "blue",
      films: [ "https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/"],
      gender: "male",
      hair_color: "blond",
      height: "172",
      homeworld: "https://swapi.co/api/planets/1/",
      mass: "77",
      name: "Luke Skywalker",
      skin_color: "fair",
      species: [ "https://swapi.co/api/species/1/" ],
      starships: [ "https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/" ],
      url: "https://swapi.co/api/people/1/",
      vehicles: [ "https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/" ]
    }
  ]
};
