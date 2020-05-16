import axios from "axios";

const API_KEY = "c9a1dae6cf28efb4ba69f43ecf6f4729";

export const getMovies = async () => {
  const response = await axios.get(
    // "https://api.themoviedb.org/3/discover/movie",
    "https://api.themoviedb.org/3/movie/popular",
    {
      params: {
        api_key: API_KEY,
        language: "en-US",
        sort_by: "popularty.desc",
        include_adult: "true",
        include_video: "true"
      }
    }
  );

//   console.log(response);
//   console.log(response.data);
// console.log(response.data.results)

  return response.data.results;
};
