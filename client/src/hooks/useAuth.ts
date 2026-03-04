import { useState } from "react";
import { authService } from "../services/authService";
import type { RegisterPayload, LoginPayload, AuthUser } from "../types/auth";

interface UseAuthReturn {
  loading: boolean;
  error: string | null;
  register: (payload: RegisterPayload) => Promise<boolean>;
  login: (payload: LoginPayload) => Promise<AuthUser | null>;
  clearError: () => void;
}

export function useAuth(): UseAuthReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = () => setError(null);

  const register = async (payload: RegisterPayload): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);
      await authService.register(payload);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const login = async (payload: LoginPayload): Promise<AuthUser | null> => {
    try {
      setLoading(true);
      setError(null);
      const data = await authService.login(payload);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      return data.user;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, register, login, clearError };
}
