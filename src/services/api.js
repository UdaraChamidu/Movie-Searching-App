const API_KEY = "29c43ba1547c9e8df7e5991232b0175a";
const BASE_URL = "https://api.themoviedb.org/3";

// popular movies
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};

//search movies
export const searchMovies = async () => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};