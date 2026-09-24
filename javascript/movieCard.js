
export function movieCard(movieTitle, movieDesc, imgPath){

    const imgUrl = "https://image.tmdb.org/t/p/w500";

    const movieGrid = document.querySelector(".movie-grid");

    const card = document.createElement("article");
    const imgContainer = document.createElement("div");
    const image = document.createElement("img");
    const textContainer = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");

    card.classList.add("movie-card");
    imgContainer.classList.add("image-container");
    image.classList.add("image");
    textContainer.classList.add("title-description");
    title.classList.add("title");
    description.classList.add("description");

    title.textContent = movieTitle;
    description.textContent = movieDesc;
    if (imgPath) {
        image.src = imgUrl.concat(imgPath);
    } else {
        image.hidden = true;
    }
    image.alt = `Still from ${movieTitle}`;
    image.loading = "lazy";
    image.decoding = "async";

    card.append(imgContainer, textContainer);
    imgContainer.append(image);
    textContainer.append(title, description)
    movieGrid.append(card);

}
