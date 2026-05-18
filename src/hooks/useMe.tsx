import { ApiResponse, ErrorResponse, User } from '@/src/interface/userInterface';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { axiosInstance } from './axiosInstance';


export const userQueryKeys = {
  all: ['user'] as const,
  me: () => [...userQueryKeys.all, 'me'] as const,
  detail: (id: string) => [...userQueryKeys.all, 'detail', id] as const,
};
 

export const useMe = () => {
  return useQuery<ApiResponse<User>, AxiosError<ErrorResponse>>({
    queryKey: userQueryKeys.me(),
    queryFn: async () => {
      const { data } = await axiosInstance.get('/auth/me', {
        withCredentials: true,
      });
      return data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchOnMount: true,
    retry: (failureCount, error) => {
      // Don't retry on auth errors
      if (error.response?.status === 401 || error.response?.status === 403) {
        return false;
      }
      return failureCount < 3;
    },
  });
};



export const useLogout = () => {
  const queryClient = useQueryClient();
 
  return useMutation<ApiResponse<null>, AxiosError<ErrorResponse>>({
    mutationFn: async () => {
      const { data } = await axiosInstance.post(
        '/auth/logout',
        {},
        { withCredentials: true }
      );
      return data;
    },
    onSuccess: () => {
      // Clear all user-related caches
      queryClient.removeQueries({ queryKey: userQueryKeys.all });
    },
    onError: (error) => {
      console.error('Logout failed:', error.response?.data?.message);
    },
  });
};