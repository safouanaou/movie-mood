//update to api read access token for security

const apiKey = "40ce35e2ee1d21b892f695781aeec252";
const baseURL = "https://api.themoviedb.org/3";

async function getMovieByMood(...moodWords){

    try {

        const keywords = moodWords.map(async word => {
        const url = `${baseURL}/search/keyword?api_key=${apiKey}&query=${encodeURIComponent(word)}`;
        const keywordResponse = await fetch(url);

        if(!keywordResponse.ok){
            throw new Error(`request failed: ${keywordResponse.status}`);
        }
        const keywordData = await keywordResponse.json();
    
        return keywordData
        } )

        // Promise.all waits for the fetching of multiple api requests and puts them in an array
        const keywordRes = await Promise.all(keywords);
    
        const keywordIDs = keywordRes.map(k => { 
            if(k.results.length === 0){
                throw new Error("no matching keyword found")
            }
            k.results[0].id}).join("|");

        const movieUrl = `${baseURL}/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_keywords=${encodeURIComponent(keywordIDs)}`;
        const movieResponse = await fetch(movieUrl);
        if(!movieResponse.ok){
            throw new Error(`request failed: ${movieResponse.status}`);
        }
        const movieData = await movieResponse.json();

        return movieData

    } catch(err){
        console.error("fetch error:", err)
        throw err
    }

    } 

