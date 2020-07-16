const API_KEY = "****";
const base_endpoint = "https://api.themoviedb.org/3";

const getMovieGenres = async function () {
    const apiUrl = `${base_endpoint}/genre/movie/list?api_key=${API_KEY}`;
    try {
        const res = await fetch(apiUrl, { method: "GET" });
        const data = await res.json();        
        return data;
    } catch (error) {
        console.log(error);
    }
};
 
const getMovieById = async movieId => {    
    const movieByIDEndpoint = `${base_endpoint}/find/${movieId}?external_source=imdb_id&api_key=${API_KEY}`;
    try {
      const res = await fetch(movieByIDEndpoint, { method: "GET" });
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const getTopRatedMovies = async () => {   
    const topRatedMoviesEndpoint = `${base_endpoint}/movie/top_rated?api_key=${API_KEY}`;
    try {
      const res = await fetch(topRatedMoviesEndpoint, { method: "GET" });
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const getTopRatedMoviesInGenreId = async () => {
    const topRatedMoviesEndpoint = `${base_endpoint}/discover/movie?with_genres=28&sort_by=vote_average.desc&vote_count.gte=2000&api_key=${API_KEY}`;
    try {
      const res = await fetch(topRatedMoviesEndpoint, { method: "GET" });
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const getTopRatedMoviesFromYearX = async year => {    
    const topRatedMoviesEndpoint = `${base_endpoint}/discover/movie?primary_release_year=1975&sort_by=vote_average.desc&vote_count.gte=2000&api_key=${API_KEY}`;
    try {
      const res = await fetch(topRatedMoviesEndpoint, { method: "GET" });
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };
