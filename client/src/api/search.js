import axios from "axios";

export const searchPosts = async (searchTerm) => {
  try {
    const response = await axios.get(`/search?q=${searchTerm}`);
    return response.data;
  } catch (error) {
    console.error("Error occurred while searching:", error);
    return [];
  }
};
