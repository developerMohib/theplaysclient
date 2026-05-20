import axios from "axios";
import { redirect } from "next/navigation";
import { useEffect } from "react";

// baseURL: "https://theplaysserver.vercel.app/api",
// baseURL: "http://localhost:5000/api",

export const axiosInstance = axios.create({
  baseURL: "https://theplaysserver.onrender.com/api",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// Request interceptor
axiosInstance.interceptors.request.use((config) => {
  return config;
});

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useEffect(() => {
        if (error?.auth) {
          redirect("/signin");
        }
      }, [error]);
      // safer than window in Next.js
      if (typeof window !== "undefined") {
        window.location.replace("/signin");
      }
    }

    return Promise.reject(error);
  },
);
