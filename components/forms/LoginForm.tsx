"use client";

import { useState } from "react";
import FormInput from "./FormInput";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { LoginData } from "@/types/login";

export default function LoginForm() {
  const [formData, setFormData] = useState<LoginData>({
    username: "",
    password: "",
  });
  const router = useRouter();
  const [errors, setErrors] = useState<Partial<LoginData>>({});
  const api = process.env.NEXT_PUBLIC_API_URL;

  const validateField = (name: keyof LoginData, value: string): string => {
    if (name === "username" && !value.trim()) {
      return "Username is required.";
    } else if (name === "username" && value.length < 4) {
      return "Username must be longer than 4 characters"
    }
    if (name === "password" && !value.trim()) {
      return "Password is required.";
    } else if (name === "password" && value.length < 6) {
      return "Password must be longer than 6 characters."
    }
    return "";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof LoginData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))

    const error = validateField(name as keyof LoginData, value);

    setErrors((prev) => ({
      ...prev,
      [name]: error || undefined,
    }));
  };

  const validateForm = () => {
    const newErrors: Partial<LoginData> = {};
    (Object.keys(formData) as (keyof LoginData)[]).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await axios.post(
        `${api}/api/auth/login`,
        {
          username: formData.username,
          password: formData.password,
        },
        { withCredentials: true }
      );

      if (res.status === 200) {
        toast.success("Logged in successfully!");
        router.push("/manage-blog");
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ error: string }>;
      const errorMsg = axiosError?.response?.data?.error || "Something went wrong.";
      toast.error(errorMsg);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-16 w-full sm:w-[480px]" noValidate>
      <div className="flex flex-col gap-4">
        <FormInput
          name="username"
          label="Username"
          placeholder="Username"
          className="bg-white90"
          value={formData.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.username}
          required
        />
        <FormInput
          name="password"
          label="Password"
          placeholder="••••••"
          className="bg-white90"
          type="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-[#0080DB] text-[#E6E6E6] mt-6 py-2 px-4 rounded-md cursor-pointer hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]"
      >
        Log in
      </button>
    </form>
  );
}