import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import MainLayout from "../../components/MainLayout";
import { signupAsWriter } from "../../services/index/users.js";

const BecomeWriterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  // Placeholder mutation, replace with your actual service
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ name, email, writer }) => {
      return signupAsWriter({ name, email, writer });
    },
    onSuccess: () => {
      toast.success("Application submitted! We'll review and get back to you.");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      bio: "",
      sample: "",
      motivation: "",
      writer: true
    },
    mode: "onChange",
  });

  const submitHandler = (data) => {
    mutate(data);
  };

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-lg mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
            Become a Writer
          </h1>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col mb-6 w-full">
              <label htmlFor="name" className="text-[#5a7184] font-semibold block">Name</label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  minLength: { value: 1, message: "Name length must be at least 1 character" },
                  required: { value: true, message: "Name is required" },
                })}
                placeholder="Enter name"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.name ? "border-red-500" : "border-[#c3cad9]"}`}
              />
              {errors.name?.message && <p className="text-red-500 text-xs mt-1">{errors.name?.message}</p>}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label htmlFor="email" className="text-[#5a7184] font-semibold block">Email</label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Enter a valid email",
                  },
                  required: { value: true, message: "Email is required" },
                })}
                placeholder="Enter email"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.email ? "border-red-500" : "border-[#c3cad9]"}`}
              />
              {errors.email?.message && <p className="text-red-500 text-xs mt-1">{errors.email?.message}</p>}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label htmlFor="bio" className="text-[#5a7184] font-semibold block">Short Bio</label>
              <textarea
                id="bio"
                {...register("bio", {
                  minLength: { value: 10, message: "Bio must be at least 10 characters" },
                  required: { value: true, message: "Bio is required" },
                })}
                placeholder="Tell us about yourself"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.bio ? "border-red-500" : "border-[#c3cad9]"}`}
                rows={3}
              />
              {errors.bio?.message && <p className="text-red-500 text-xs mt-1">{errors.bio?.message}</p>}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label htmlFor="sample" className="text-[#5a7184] font-semibold block">Writing Sample</label>
              <textarea
                id="sample"
                {...register("sample", {
                  minLength: { value: 50, message: "Sample must be at least 50 characters" },
                  required: { value: true, message: "Writing sample is required" },
                })}
                placeholder="Paste a sample of your writing"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.sample ? "border-red-500" : "border-[#c3cad9]"}`}
                rows={5}
              />
              {errors.sample?.message && <p className="text-red-500 text-xs mt-1">{errors.sample?.message}</p>}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label htmlFor="motivation" className="text-[#5a7184] font-semibold block">Why do you want to write?</label>
              <textarea
                id="motivation"
                {...register("motivation", {
                  minLength: { value: 20, message: "Motivation must be at least 20 characters" },
                  required: { value: true, message: "Motivation is required" },
                })}
                placeholder="Share your motivation for writing"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.motivation ? "border-red-500" : "border-[#c3cad9]"}`}
                rows={3}
              />
              {errors.motivation?.message && <p className="text-red-500 text-xs mt-1">{errors.motivation?.message}</p>}
            </div>
            <button
              type="submit"
              disabled={!isValid || isLoading}
              className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg mb-6 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Submit Application
            </button>
            <p className="text-sm font-semibold text-[#5a7184]">
              Already member of climate connect?{" "}
              <Link to="/register/writer" className="text-primary">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default BecomeWriterPage;
