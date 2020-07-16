

// const doSomethingWithData = async function () {
//     const data = await getMovieGenres();
//     console.log("Here is your data:", data);
// };

// doSomethingWithData();

const setMovieGenres = async () => {
    const movieGenresList = document.getElementById("movieGenresList");
    const data = await getMovieGenres();
    data.genres.forEach(movieGenre => {
      const li = document.createElement("li");
      const liContent = document.createTextNode(
        `Genre: ${movieGenre.name}, id: ${movieGenre.id}`
      );
      li.appendChild(liContent);
      movieGenresList.append(li);
    });
  };

  const setSingleMovie = async () => {
    const data = await getMovieById("tt0111161");
    const movie = data.movie_results[0];
    const topMovieParagraph = document.getElementById("myTopMovie");    
    topMovieParagraph.appendChild(document.createTextNode(movie.title));
  };

  const setTopRatedMovies = async () => {
    const topRatedList = document.getElementById("topRated");
    const data = await getTopRatedMovies();
    const topTen = data.results.splice(0, 10);
    topTen.forEach(movie => {
      const li = document.createElement("li");
      const liContent = document.createTextNode(
        `${movie.title}, rating: ${movie.vote_average}`
      );
      li.appendChild(liContent);
      topRatedList.append(li);
    });
  };


  const setTopRatedMoviesInGenre = async genreId => {
    const topRatedList = document.getElementById("topInGenre");
    topRatedList.innerHTML = "";
    const data = await getTopRatedMoviesInGenreId(genreId);
    const topTen = data.results.splice(0, 10);
    topTen.forEach(movie => {
      const li = document.createElement("li");
      const liContent = document.createTextNode(
        `${movie.title}, rating: ${movie.vote_average}, vote count: ${movie.vote_count}`
      );
      li.appendChild(liContent);
      topRatedList.append(li);
    });
  };

  const setTopRatedMoviesForYear = async year => {
    const topRatedList = document.getElementById("topRatedFromYear");
    topRatedList.innerHTML = "";
    const data = await getTopRatedMoviesFromYearX(year);
    const topTen = data.results.splice(0, 10);
    topTen.forEach(movie => {
      const li = document.createElement("li");
      const liContent = document.createTextNode(
        `${movie.title}, rating: ${movie.vote_average}, vote count: ${movie.vote_count}`
      );
      li.appendChild(liContent);
      topRatedList.append(li);
    });
  };
  
  setMovieGenres();
  setSingleMovie();
  setTopRatedMovies();
  setTopRatedMoviesInGenre();
  setTopRatedMoviesForYear();
 