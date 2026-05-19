export type NavItem = {
  label: string
  href: string
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone?: string;
  password?: string;
  role: string;
  image?: string | null;
  isBlocked: 'active' | 'blocked';
  createdAt: string;
  updatedAt: string;
}


export interface ApiResponse<IUser> {
  id:string ;
  success: boolean;
  message?: string;
  data?: IUser;
}
 
export interface ErrorResponse {
  success: boolean;
  message: string;
}

export interface IGame {
  _id: string
  name: string
  slug: string
  image: string
  banner: string
  genre: string
  category: string
  description: string
  shortDescription: string
  version: string
  publisher: string
  releaseDate: string
  multiplayer: boolean
  rating: number
  features: string[]
  tags: string[]
  available: boolean
  trending: boolean
  featured: boolean
  price: number
  discount: number
  currency: string
}
