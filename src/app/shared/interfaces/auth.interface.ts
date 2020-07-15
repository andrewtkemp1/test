export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  loggedIn: boolean;
  token: string;
  email: string;
}
