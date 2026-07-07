import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, HeartPulse } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { signup } from "../../services/authService";
import useAuthStore from "../../store/authStore";

const signupSchema = z
  .object({
    fullName: z.string().min(3, "Full name must be at least 3 characters"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export default function SignupForm() {
  const navigate = useNavigate();

  const loginStore = useAuthStore((state) => state.login);

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await signup({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      });

      loginStore(response.user, response.token);
      toast.success("Account created successfully!");
      navigate("/login");
    } catch (error) {
     toast.error(
  error.response?.data?.message || "Signup Failed"
);
    }
  };

  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-2xl bg-blue-600 p-3">
          <HeartPulse className="text-white" />
        </div>

        <div>
          <h1 className="text-3xl font-bold">HealthTwin AI</h1>
          <p className="text-slate-500">Create your account</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

        <div>
          <input
            {...register("fullName")}
            placeholder="Full Name"
            className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-500"
          />
          <p className="mt-1 text-sm text-red-500">
            {errors.fullName?.message}
          </p>
        </div>

        <div>
          <input
            {...register("email")}
            placeholder="Email Address"
            className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-500"
          />
          <p className="mt-1 text-sm text-red-500">
            {errors.email?.message}
          </p>
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            placeholder="Password"
            className="w-full rounded-xl border border-slate-300 p-4 pr-12 outline-none focus:border-blue-500"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-4"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

          <p className="mt-1 text-sm text-red-500">
            {errors.password?.message}
          </p>
        </div>

        <div>
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm Password"
            className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-500"
          />
          <p className="mt-1 text-sm text-red-500">
            {errors.confirmPassword?.message}
          </p>
        </div>

        <button
          disabled={isSubmitting}
          className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>

      </form>

      <p className="mt-6 text-center text-slate-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-blue-600"
        >
          Login
        </Link>
      </p>

    </div>
  );
}