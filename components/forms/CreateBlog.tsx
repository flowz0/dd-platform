"use client";

import { BlogProps } from "@/types/blog";
import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useAuthUser from "@/hooks/useAuthUser";
import FormInput from "./FormInput";
import TextArea from "./TextArea";
import FileInput from "./FileInput";

export default function CreateBlogForm() {
  const [blogData, setBlogData] = useState<BlogProps>({
    readTime: "",
    title: "",
    summary: "",
    img: null,
    header: "",
    paragraph: "",
    header2: "",
    paragraph2: "",
    header3: "",
    paragraph3: "",
    header4: "",
    paragraph4: "",
    header5: "",
    paragraph5: "",
  });
  const [previewUrl, setPreviewURL] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<BlogProps>>({});
  const router = useRouter();
  const user = useAuthUser();
  const api = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (blogData.img instanceof File) {
      const objectUrl = URL.createObjectURL(blogData.img);
      setPreviewURL(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [blogData.img]);

  type FieldValue = string | File | StaticImageData | null | undefined;

  const validateField = (
    name: keyof BlogProps,
    value: FieldValue
  ): string => {
    if (name === "img") {
      if (!value || !(value instanceof File)) {
        return "A valid image file is required.";
      }
      return "";
    }
    if (typeof value !== "string") return "";
    if (name === "readTime" && !value.trim()) {
      return "Read time is required.";
    } else if (name === "readTime" && value.length < 0) {
      return "Read time must be more than 0 minutes.";
    }
    if (name === "title" && !value.trim()) {
      return "Title is required.";
    } else if (name === "title" && value.length < 5) {
      return "Title must be more than 5 characters.";
    }
    if (name === "summary" && !value.trim()) {
      return "Summary is required.";
    } else if (name === "summary" && value.length < 10) {
      return "Summary must be more than 10 characters";
    }
    if (name === "header" && !value.trim()) {
      return "Header is required.";
    } else if (name === "header" && value.length < 10) {
      return "Header must be more than 10 characters";
    }
    if (name === "paragraph" && !value.trim()) {
      return "Paragraph is required.";
    } else if (name === "paragraph" && value.length < 10) {
      return "Paragraph must be more than 10 characters";
    }
    if (name === "header2" && !value.trim()) {
      return "Second header is required.";
    } else if (name === "header2" && value.length < 10) {
      return "Second header must be more than 10 characters";
    }
    if (name === "paragraph2" && !value.trim()) {
      return "Second paragraph is required.";
    } else if (name === "paragraph2" && value.length < 10) {
      return "Second paragraph must be more than 10 characters";
    }
    
    return "";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    const value = name === "img" ? blogData.img : e.target.value;
    const error = validateField(name as keyof BlogProps, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBlogData((prev) => ({ ...prev, [name]: value }))
    const error = validateField(name as keyof BlogProps, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error || undefined,
    }));
  };

  const uploadToCloudinary = async (file: File): Promise<string | null> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "f0-ductdaddy");

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      );
      return res.data.secure_url;
    } catch (error) {
      console.error("Cloudinary upload failed", error);
      return null;
    }
  };

  const validateForm = () => {
    const newErrors: Partial<BlogProps> = {};
    (Object.keys(blogData) as (keyof BlogProps)[]).forEach((key) => {
      const value = blogData[key];
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      let imageUrl = null;

      if (blogData.img instanceof File) {
        imageUrl = await uploadToCloudinary(blogData.img);
        if (!imageUrl) {
          setErrors((prev) => ({
            ...prev,
            img: "Failed to upload image.",
          }));
          return;
        }
      }

      if (!user) {
        toast.error("User not found. Please log in.");
        router.push("/login");
        return;
      }

      const payload = {
        ...blogData,
        img: imageUrl,
        author: `${user.firstName} ${user.lastName}`,
      };

      const res = await axios.post(`${api}/api/blogs`, payload, { withCredentials: true });

      if (res.status === 201 || res.status === 200) {
        toast.success("Blog created successfully!");
        router.push("/manage-blog")
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error response:", error.response);
        toast.error(`Error ${error.response?.status} - ${error.response?.data?.error || error.message}`)
      } else {
        console.error("Unexpected error:", error);
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-y-6 w-full lg:max-w-[800px]" noValidate>
      <FormInput
        name="title"
        label="Blog title"
        type="text"
        placeholder="Title for blog"
        value={blogData.title}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.title}
        required
      />
      <TextArea
        name="summary"
        label="Blog summary"
        placeholder="Summary for blog"
        value={blogData.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.summary}
        required
      />
      <FormInput
        name="readTime"
        label="Read time"
        type="number"
        placeholder="1 - 59 (minutes)"
        value={blogData.readTime}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.readTime}
        required
      />
      <FileInput
        name="img"
        label="Blog image"
        previewUrl={previewUrl}
        error={errors.img as string}
        onBlur={handleBlur}
        onChange={(file) => {
          setBlogData((prev) => ({ ...prev, img: file }));
          const error = validateField("img", file);
          setErrors((prev) => ({ ...prev, img: error || undefined }));
        }}
        required
      />
      <FormInput
        name="header"
        label="First header"
        type="text"
        placeholder="Header for blog"
        value={blogData.header}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.header}
        required
      />
      <TextArea
        name="paragraph"
        label="First paragraph"
        placeholder="Paragraph for blog"
        value={blogData.paragraph}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.paragraph}
        required
      />
      <FormInput
        name="header2"
        label="Second header"
        type="text"
        placeholder="Second header for blog"
        value={blogData.header2}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.header2}
        required
      />
      <TextArea
        name="paragraph2"
        label="Second Paragraph"
        placeholder="Second paragraph for blog"
        value={blogData.paragraph2}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.paragraph2}
        required
      />
      <FormInput
        name="header3"
        label="Third header"
        type="text"
        placeholder="Third header for blog"
        value={blogData.header3!}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.header3}
      />
      <TextArea
        name="paragraph3"
        label="Third Paragraph"
        placeholder="Third paragraph for blog"
        value={blogData.paragraph3!}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.paragraph3}
      />
      <FormInput
        name="header4"
        label="Fourth header"
        type="text"
        placeholder="Fourth header for blog"
        value={blogData.header4!}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.header4}
      />
      <TextArea
        name="paragraph4"
        label="Fourth Paragraph"
        placeholder="Fourth paragraph for blog"
        value={blogData.paragraph4!}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.paragraph4}
      />
      <FormInput
        name="header5"
        label="Fifth header"
        type="text"
        placeholder="Fifth header for blog"
        value={blogData.header5!}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.header5}
      />
      <TextArea
        name="paragraph5"
        label="Fifth Paragraph"
        placeholder="Fifth paragraph for blog"
        value={blogData.paragraph5!}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.paragraph5}
      />
      <button type="submit" className="bg-[#0080DB] text-[#E6E6E6] mt-4 py-3 px-4 w-full font-semibold rounded-md cursor-pointer hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]">
        Post blog
      </button>
    </form>
  );
}