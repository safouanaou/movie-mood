
const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGNlMzVlMmVlMWQyMWI4OTJmNjk1NzgxYWVlYzI1MiIsIm5iZiI6MTc0OTEzOTY0OC4yNTEwMDAyLCJzdWIiOiI2ODQxYzBjMDczMzVkMWY3ODBhZDkzMTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.l4anDI48ggmM7QbBSqQSSu1yLtPwDW_y2ojv8Sh1K_M";
const baseURL = "https://api.themoviedb.org/3";

export async function getMovieByMood(moodWords){

    const options = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            accept: 'application/json'
        }
    }

    try {

        const keywords = moodWords.map(async word => {
        const url = `${baseURL}/search/keyword?query=${encodeURIComponent(word)}`;
        const keywordResponse = await fetch(url, options);

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
            return k.results[0].id
        }).join("|");

        const movieUrl = `${baseURL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_keywords=${encodeURIComponent(keywordIDs)}`;
        const movieResponse = await fetch(movieUrl, options);
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
