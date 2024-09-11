import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API
})

export const useApi = () => ({
  validateToken: async (token:string) => {
    return {
      user: {id: 1, name: "Felipe", email: "felipe@gmail.com"},
    }
    const response = await api.post("/validate", {token})
    return response.data;
  },

  signIn: async(email: string, password: string) => {
    return {
      user: {id: 1, name: "Felipe", email: "felipe@gmail.com"},
      token: "112341"
    }
    const response = await api.post("/signin", {email, password})
    return response.data;
  },

  logout: async () => {
    return { status: true };
    const response = await api.post("/logout")
    return response.data;
  }
})