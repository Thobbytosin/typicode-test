import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { fetchPhotos } from "../api/photosApi";

export default function useFetchPhotos() {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["photos"], // Query key
    queryFn: fetchPhotos, // Axios call
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    retry: 1, // Retry once on failure
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response) {
        console.error(
          "Backend Error Message:",
          error.response.data?.message || "No error message from server"
        );
      }
    },
  });

  const errorMessage =
    isError && axios.isAxiosError(error) && error.response?.data?.message
      ? error.response.data.message
      : "No error";

  return {
    data,
    isLoading,
    error,
    errorMessage,
  };
}
