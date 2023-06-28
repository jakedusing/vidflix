const key = "e50045e6c3a8cd2dc0a9e73c186cc1e4";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestStarWars: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=star+wars&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestAvengers: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=avengers&page=1&include_adult=false`,
};

export default requests;
