import axios from 'axios';

export interface ApiError {
  success: boolean;
  message: string;
  statusCode: number;
}

export const getErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as ApiError;
    return data?.message || error.message;
  }
  return 'An unexpected error occurred';
};