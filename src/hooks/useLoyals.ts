import { useState } from "react";
import { dropoutWatchApi } from "../api";
import { AxiosError } from "axios";
import Swal from "sweetalert2";
import { Loyal } from "../utilities";

export const useLoyals = () => {
  const path = "/loyals";
  const [error, setError] = useState<string | null>(null);

  const getLoyalsByQuery = async (endpoint: string) => {
    try {
      const { data } = await dropoutWatchApi.get<Loyal>(`${path}${endpoint}`);
      console.log(data);
      return data;
    } catch (error) {
      const err = error as AxiosError;
      setError(err.response?.data as string);
      Swal.fire({
        title: "Error de conexión",
        text: "Error de conexión a la BD",
        icon: "error",
      });
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return { getLoyalsByQuery, error };
};
