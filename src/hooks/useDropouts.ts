import { useState } from "react";
import { dropoutWatchApi } from "../api";
import { AxiosError } from "axios";
import { Traitors, TraitorsTernary } from "../traitors";
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

  const getTraitorsByTernary = async (endpoint : string) => {
    try {
      const { data } = await dropoutWatchApi.get<TraitorsTernary>(endpoint);
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
  }

  return { getTraitors, getTraitorsByTernary, error };
};
