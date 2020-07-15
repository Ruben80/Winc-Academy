console.log("The script works!");

const allDataFromDb = movies;

const addMoviesToScreen = (filmsDisplayedOnScreen) => {
  const displayOnScreen = document.getElementById("displayMovieTitles");
  const arr = filmsDisplayedOnScreen.map(function (movie) {
    const imdb = "https://www.imdb.com/title/" + movie.imdbID;
    return (
      "<div class='list-item'><a href=" +
      imdb + 
      " target='_blank'><img src=" +
      movie.Poster +
      " ></a></div>"
    );
  });
  arr.forEach(function (movie) {
    displayOnScreen.innerHTML += movie;
  });
};

addMoviesToScreen(allDataFromDb);

const radioButtonEvent = () => {
  const radioButtons = document.querySelectorAll("input[name='movie']");
  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener("change", function (event) {
      changeEvent(event.target.value);
    });
  });
};

radioButtonEvent();

const changeEvent = (movieFilterChoise) => {
  switch (movieFilterChoise) {
    case "newestMovies":
      newestMoviesFilter();
      break;
    case "avengers":
      moviesFilter("Avenger");
      break;
    case "x-Men":
      moviesFilter("X-Men");
      break;
    case "princess":
      moviesFilter("Princess");
      break;
    case "batman":
      moviesFilter("Batman");
      break;
  }
};

const moviesFilter = (movieTitle) => {
  const filteredMovie = movies.filter(function (movie) {
    return movie.Title.includes(movieTitle);
  });
  removeList();
  addMoviesToScreen(filteredMovie);
};

const newestMoviesFilter = () => {
  const filteredNewestMovies = movies.filter(function (movie) {
    return parseInt(movie.Year) >= 2014;
  });
  removeList();
  addMoviesToScreen(filteredNewestMovies);
};

const removeList = () => {
  const listItems = document.querySelectorAll(".list-item");
  listItems.forEach((item) => item.remove());
};