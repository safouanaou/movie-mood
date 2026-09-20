//update to api read access token for security

const apiKey = "40ce35e2ee1d21b892f695781aeec252";
const baseURL = "https://api.themoviedb.org/3";

async function getMovieByMood([moodWords]){

    
    const url = `${baseURL}/search/keyword?api_key=${apiKey}&query=${encodeURIComponent(moodWords)}`;
    const movieUrl = `${baseURL}/discover/movie?${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_keywords=${encodeURIComponent(keywordIds)}`

    
        const keywordResponse = await fetch(url);
        const keywordData = await keywordResponse.json();

    




    } 
    




