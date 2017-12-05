const fetchMovieCrawl = () => {
  return fetch('https://swapi.co/api/films/')
  .then(returnedInfo => returnedInfo.json())
  .then(moviesInfo => moviesInfo.results.map(movie =>{
    const movieCrawlObject = {
      title: movie.title,
      releaseData: movie.release_date,
      openingCrawl: movie.opening_crawl,
      id: movie.episode_id
    };
    return movieCrawlObject;
  }));
};

export default fetchMovieCrawl;