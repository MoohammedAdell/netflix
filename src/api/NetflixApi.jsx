import axios from "axios";

const netflixApi = axios.create({
  baseURL: "https://netflix54.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
    "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
  },
});

export const searchNetflix = async (query) => {
  const response = await netflixApi.get("/search/", {
    params: {
      query,
      offset: 0,
      limit_titles: 10,
      limit_suggestions: 20,
      lang: "en",
    },
  });

  return response.data;
};
