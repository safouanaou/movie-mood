import { getMovieByMood } from "./javascript/tmdb-api.js";
import { movieCard } from "./javascript/movieCard.js";

const form = document.querySelector(".mood-form");
const moodInput = document.getElementById("mood-input");
const loadMore = document.getElementById("loadMore");

   let currentPage = 1;
   let totalPages = 1;
   let currentMoodWords = [];

  async function displayPage(){

    const movieData = await getMovieByMood(currentMoodWords, currentPage);
    console.log(movieData)

    totalPages = movieData.total_Pages;

    movieData.results.forEach(movie => {
        const movieTitle = movie.title;
        const movieDescription = movie.overview;
        const imgPath = movie.backdrop_path;
        movieCard(movieTitle, movieDescription, imgPath)
    });

        }
    

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    

    currentMoodWords = moodInput.value.trim().split(/\s+/).filter(Boolean);


    
    const grid = document.querySelector(".movie-grid");
    grid.replaceChildren();
    await displayPage();
    form.reset();

})


loadMore.addEventListener("click", async () => {
    if(currentPage >= totalPages){
        return;
    }

    currentPage++
    displayPage();
})

