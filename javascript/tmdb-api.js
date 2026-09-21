//update to api read access token for security

const apiKey = "40ce35e2ee1d21b892f695781aeec252";
const baseURL = "https://api.themoviedb.org/3";

async function getMovieByMood(...moodWords){
    

    const moods = moodWords.map(async word => {
        const url = `${baseURL}/search/keyword?api_key=${apiKey}&query=${encodeURIComponent(word)}`;
        const keywordResponse = await fetch(url);
        const keywordData = await keywordResponse.json();

        return keywordData
    } )


    const keywordsRes = await Promise.all(moods);





    /*
        const keywordResponse = await fetch(url);
        
        const keywordData = await keywordResponse.json();

        const keywordIDs = keywordData.results.map(keyword => keyword.id).slice(0,1).join("|");

        console.log(keywordData)


        const movieUrl = `${baseURL}/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_keywords=${encodeURIComponent(keywordIDs)}`;


        const movieResponse = await fetch(movieUrl);
        const movieData = movieResponse.json();

        console.log(movieData)
        */

    } 
    



getMovieByMood("evil", "sad", "depressing")
