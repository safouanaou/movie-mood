import { getMovieByMood } from "./javascript/tmdb-api.js";
import { movieCard } from "./javascript/movieCard.js";

const form = document.querySelector(".mood-form");
const moodInput = document.getElementById("mood-input");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const inputValue = moodInput.value.trim().split(" ");

    const movieData = await getMovieByMood(inputValue);

    const grid = document.querySelector(".movie-grid");
    grid.replaceChildren();


    movieData.results.forEach(movie => {
        const movieTitle = movie.title;
        const movieDescription = movie.overview;
        const img = movie.backdrop_path;
        movieCard(movieTitle, movieDescription, img)
    });

    form.reset();

})


