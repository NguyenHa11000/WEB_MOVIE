export const movieService = {
  getMovies: async (type) => {
    console.log(type);
    const url = `https://api.themoviedb.org/3/movie/${type}?api_key=1394fe130ffb93ad30dbc71945f4d213&language=en-US&page=1`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    return { data: responseJson.results, type: type };
  },

  getDetailMovie: async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=1394fe130ffb93ad30dbc71945f4d213&language=en-US`;
    const response = await fetch(url);
    const responseJson = await response.json();
    // console.log(responseJson)
    return responseJson;
  },
};
