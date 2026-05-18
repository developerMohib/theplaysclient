export interface User {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  password?: string; // Never exposed in responses
  role: 'user' | 'admin';
  image?: string | null;
  isBlocked: 'active' | 'blocked';
  createdAt: string;
  updatedAt: string;
}


export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  user?: T;
}
 
export interface ErrorResponse {
  success: boolean;
  message: string;
}