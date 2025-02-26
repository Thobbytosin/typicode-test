import axios from "axios";
import { SERVER_URI } from "../utils/uri";

export const fetchPhotos = async () => {
  const response = await axios.get(`${SERVER_URI}/photos`);
  return response.data;
};
