"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "./axiosInstance";
import { ApiResponse, ErrorResponse, IUser } from "../utilitis/all.types";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';


export const userQueryKeys = {
  me: ["user", "me"] as const,
};

export const getMe = async (): Promise<ApiResponse<IUser>> => {
  const res = await axiosInstance.get<ApiResponse<IUser>>('/auth/me')
  return res.data
}

export const useMe = () => {
  const { data, isFetching, isLoading, refetch } = useQuery<
    ApiResponse<IUser>,
    AxiosError<ErrorResponse>
  >({
    queryKey: userQueryKeys.me,
    queryFn: getMe,
    retry: false,
    staleTime: 5 * 60 * 1000,
  })

  return { data, isFetching, isLoading, refetch }
}


// Log out function

export const logoutUser = async () => {
  const res = await axiosInstance.post("/auth/logout", {}, {
    withCredentials: true,
  })

  return res.data
}


export const useLogout = () => {
  const router = useRouter()
const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutUser,
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message)
      }
      setTimeout(() => {
        router.push("/")
      }, 800)

       queryClient.clear();

      // OR better: only remove auth data
      queryClient.removeQueries({ queryKey: ["user"] });

      router.push("/");
    },
    onError: (err) => {
      console.error('Logout failed', err);
      toast.error("Logout failed")
    },
  })
}