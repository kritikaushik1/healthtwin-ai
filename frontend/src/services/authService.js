import api from "../api/axios";

// Signup
export const signup = async (userData) => {
  const response = await api.post("/auth/signup", userData);
  return response.data;
};

// Login
export const login = async (userData) => {
  const response = await api.post("/auth/login", userData);
  return response.data;
};

// Current User
export const getCurrentUser = async (token) => {
  const response = await api.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};