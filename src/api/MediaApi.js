import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;

//Fetching Photos 
export const fetchPhotos = async (query, page = 1, per_page = 20) => {
  try {
    const response = await axios.get(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          query,
          page,
          per_page,
        },
        headers: {
          Authorization: `Client-ID ${UNSPLASH_KEY}`,
        },
      }
    );

    console.log("SUCCESS:", response.data);

    return response.data;
  } catch (error) {
    console.log("STATUS:", error.response?.status);
    console.log("ERROR:", error.response?.data);

    throw error;
  }
};

//Fetchvideos from pexels api 
export const fetchVideos = async (query, per_page = 20) => {
  try {
    const response = await axios.get(
      "https://api.pexels.com/v1/videos/search",
      {
        params: {
          query,
          per_page,
        },
        headers: {
          Authorization: PEXELS_KEY,
        },
      }
    );

    console.log("SUCCESS:", response.data);

    return response.data;
  } catch (error) {
    console.log("STATUS:", error.response?.status);
    console.log("ERROR:", error.response?.data);

    throw error;
  }
};

// Fetch GIFs from GIPHY API
export const fetchGifs = async (query, limit = 20) => {
  try {
    const response = await axios.get(
      "https://api.giphy.com/v1/gifs/search",
      {
        params: {
          api_key: GIPHY_KEY,
          q: query,
          limit,
        },
      }
    );

    console.log("SUCCESS:", response.data);

    return response.data;
  } catch (error) {
    console.log("STATUS:", error.response?.status);
    console.log("ERROR:", error.response?.data);

    throw error;
  }
};