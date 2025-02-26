import axios from "axios";
import { SERVER_URI } from "../utils/uri";

export const fetchComments = async () => {
  const response = await axios.get(`${SERVER_URI}/comments`);
  return response.data;
};
