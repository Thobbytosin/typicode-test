import axios from "axios";
import { SERVER_URI } from "../utils/uri";

export const fetchUsers = async () => {
  const response = await axios.get(`${SERVER_URI}/users`);
  return response.data;
};
