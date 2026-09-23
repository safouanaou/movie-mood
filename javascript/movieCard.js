
export function movieCard(movieTitle, movieDesc, imgPath){

    const imgUrl = "https://image.tmdb.org/t/p/w500";

    const movieGrid = document.querySelector(".movie-grid");

    const movieCard = document.createElement("div");
    const imgContainer = document.createElement("div");
    const image = document.createElement("img");
    const textContainer = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");

    movieCard.classList.add("movie-grid");
    imgContainer.classList.add("image-container");
    textContainer.classList.add("title-description");
    title.classList.add("title");
    description.classList.add("description");

    title.textContent = movieTitle;
    description.textContent = movieDesc;
    image.src = imgUrl.concat(imgPath);

    movieCard.append(imgContainer);
    imgContainer.append(image);
    textContainer.append(title, description)
    movieGrid.append(movieCard);

}
