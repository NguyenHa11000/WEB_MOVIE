export const TVShowService = {
  getMovies: async (type) => {
    const url = `https://api.themoviedb.org/3/tv/${type}?api_key=1394fe130ffb93ad30dbc71945f4d213&language=en-US&page=1`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.results;
  },
};
