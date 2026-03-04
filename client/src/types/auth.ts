export interface RegisterPayload {
  full_name: string;
  username: string;
  email: string;
  phone: string;
  barangay: string;
  password: string;
}

export interface LoginPayload {
  identifier: string;
  password: string;
}

export interface AuthUser {
  id: number;
  full_name: string;
  role: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: AuthUser;
}
