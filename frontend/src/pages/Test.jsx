import { useEffect } from "react";
import { getCurrentUser } from "../services/authService";
import useAuthStore from "../store/authStore";

export default function Test() {
  const { token } = useAuthStore();

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) return;

      try {
        const data = await getCurrentUser(token);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [token]);

  return <h1>Testing Auth...</h1>;
}