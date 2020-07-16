const API_KEY = "die krijg je lekker niet";
const base_endpoint = "https://api.themoviedb.org/3";

const getMovieGenres = async () => {
  // api.themoviedb.org/3/genre/movie/list?api_key=jouwkeyhier
  const APIEndpoint = `${base_endpoint}/genre/movie/list?api_key=${API_KEY}`;
  try {
    const res = await fetch(APIEndpoint, { method: "GET" });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};