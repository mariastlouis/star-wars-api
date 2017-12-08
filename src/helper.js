export const fetchMovieCrawl = async() =>{
  const movieFetch = await fetch('https://swapi.co/api/films/')
  const movieData = await movieFetch.json()
  return fetchMovieData(movieData.results)
}

const fetchMovieData = (movieArray) => {
  return movieArray.map(movie => {
    return {
      title: movie.title,
      releaseDate: movie.release_date,
      openingCrawl: movie.opening_crawl,
      id: movie.epsisode_id
    }
  })
}

export const getVehicle = async() => {
  const vehicleFetch = await fetch('https://swapi.co/api/vehicles/')
  const vehicleData = await vehicleFetch.json()
  return fetchVehicleData(vehicleData.results)
}

const fetchVehicleData = (vehicleData) => {
  return vehicleData.map(vehicle =>{
    return {
      name: vehicle.name,
      favorite: false,
      data: {
        Model: vehicle.model,
        Class: vehicle.vehicle_class,
        Passengers: vehicle.passengers
      }
    }
    })
}

export const getPlanet = async () => {
  const planetFetch = await fetch('https://swapi.co/api/planets/')
  const planetData = await planetFetch.json();
  return fetchPlanetData(planetData.results);
  // this.setState({planet})
}

const fetchPlanetData = (planetData) => {
  const unresolvedPromises = planetData.map(async(planet) =>{
    const planetResidents = planet.residents;
    const residentPromises = planetResidents.map(async(resident) =>{
      const residentFetch = await fetch (resident);
      const residentData = await residentFetch.json();
      return residentData.name;
    });
    const residentNames = await Promise.all(residentPromises)

    return {
      name: planet.name,
      favorite: false,
      data: {
        Climate: planet.climate,
        Population: planet.population,
        Residents: residentNames
        
      }

    }

  })
  return Promise.all(unresolvedPromises);
}

export const getCharacter = async () => {
  const peoplelFetch = await fetch('https://swapi.co/api/people/')
  const peopleData  = await peoplelFetch.json()
  return fetchPlanetSpecies(peopleData.results);
   
}

const fetchPlanetSpecies = (peopleData) => {
    const unresolvedPromises = peopleData.map(async(character) => {
      let homeworldFetch = await fetch(character.homeworld)
      let homeworldData = await homeworldFetch.json()
      let speciesFetch = await fetch(character.species)
      let speciesData = await speciesFetch.json()

      return {
        name: character.name,
        favorite: false,
        data: {
          Species: speciesData.name,
          Language: speciesData.language,
          Homeworld: homeworldData.name,
          Population: homeworldData.population,
        }
      }
    });

    return Promise.all(unresolvedPromises)
  }
