import { useEffect, useState } from "react";
import { getCurrentUser } from "../services/authService";
import useAuthStore from "../store/authStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
  const navigate = useNavigate();
  const { token, logout } = useAuthStore();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getCurrentUser(token);
        setUser(response.user);
      } catch (error) {
        toast.error("Session Expired");
        logout();
      }
    };

    if (token) {
      fetchUser();
    }
  }, [token, logout]);

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <h1 className="text-4xl font-bold">
        Welcome, {user.fullName} 👋
      </h1>

      <p className="mt-4 text-lg text-slate-600">
        {user.email}
      </p>

     <button
onClick={()=>{
logout();
navigate("/login");
}}
>
Logout
</button>

    </div>
  );
}