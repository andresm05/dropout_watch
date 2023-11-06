import { useState } from "react";
import { dropoutWatchApi } from "../api";
import { AxiosError } from "axios";
import { Traitors } from "../traitors/traitors.types";
import Swal from "sweetalert2";

export const useDropouts = () => {
  const [error, setError] = useState<string | null>(null);

  const getTraitors = async () => {
    try {
      const { data } = await dropoutWatchApi.get<Traitors>("/");
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

  return { getTraitors, error };
};
