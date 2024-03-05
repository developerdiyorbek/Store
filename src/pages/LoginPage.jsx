import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const schema = z
  .object({
    firstName: z.string().min(5),
    lastName: z.string().min(5),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    navigate("dashboard");
  };

  const data = JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    if (data) {
      navigate("/login/dashboard");
    }
  }, []);

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#ED165F]">
            Sign up
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-[#ED165F]"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              className="mt-1 p-2 block w-full border border-[#ED165F] rounded-md focus:ring-[#ED165F] focus:border-[#ED165F] outline-[#ED165F]"
              placeholder="First Name"
              {...register("firstName")}
            />
            {errors.firstName && (
              <span className="text-red-500">{errors.firstName.message}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-[#ED165F]"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              className="mt-1 p-2 block w-full border border-[#ED165F] rounded-md focus:ring-[#ED165F] focus:border-[#ED165F] outline-[#ED165F]"
              placeholder="Last Name"
              {...register("lastName")}
            />
            {errors.lastName && (
              <span className="text-red-500">{errors.lastName.message}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#ED165F]"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 p-2 block w-full border border-[#ED165F] rounded-md focus:ring-[#ED165F] focus:border-[#ED165F] outline-[#ED165F]"
              placeholder="Email address"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#ED165F]"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 p-2 block w-full border border-[#ED165F] rounded-md  focus:border-[#ED165F] outline-[#ED165F]"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-[#ED165F]"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="mt-1 p-2 block w-full border border-[#ED165F] rounded-md focus:ring-[#ED165F] focus:border-[#ED165F] outline-[#ED165F]"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#ED165F] hover:bg-[#ED165F]"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
