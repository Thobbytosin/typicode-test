import axios from "axios";
import { SERVER_URI } from "../utils/uri";

export const fetchUsersToDos = async () => {
  const response = await axios.get(`${SERVER_URI}/todos`);
  return response.data;
};
