import { SERVER_URI } from "../utils/uri";
import axios from "axios";

export const fetchPosts = async () => {
  const response = await axios.get(`${SERVER_URI}/posts`);
  return response.data;
};
