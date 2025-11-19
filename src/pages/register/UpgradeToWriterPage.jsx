import React from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import MainLayout from "../../components/MainLayout";
import { upgradeToWriter } from "../../services/index/users.js";
import { useForm } from "react-hook-form";
import { userActions } from "../../store/reducers/userReducers";
import { Link } from "react-router-dom";

const UpgradeToWriterPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user);

    const isEligible = userState.userInfo && !userState.userInfo.writer;

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        defaultValues: {
            bio: userState.userInfo?.bio || "",
            sample: "",
            motivation: "",
        },
        mode: "onChange",
    });

    const { mutate, isLoading } = useMutation({
        mutationFn: () => {
            return upgradeToWriter({ user: userState.userInfo });
        },
        onSuccess: () => {
            toast.success("Your Request to become writer is successfully submited!");
            dispatch({ type: "USER_SET_INFO", payload: { ...userState.userInfo, writer: true } });
            localStorage.setItem("account", JSON.stringify({ ...userState.userInfo, writer: true }));

            navigate("/");
        },
        onError: (error) => {
            toast.error(error.message);
            console.log(error);
        },
    });

    const onSubmit = (formData) => {
        mutate(formData);
    };

    return (
        <MainLayout>
            <section className="container mx-auto px-5 py-10">
                <div className="w-full max-w-lg mx-auto">
                    <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
                        Join our Writer Community
                    </h1>
                    {isEligible ? (
                        <>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-col mb-6 w-full">
                                    <label htmlFor="bio" className="text-[#5a7184] font-semibold block">Short Bio</label>
                                    <textarea
                                        id="bio"
                                        {...register("bio", { minLength: { value: 10, message: "Bio must be at least 10 characters" }, required: { value: true, message: "Bio is required" } })}
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
                                        {...register("sample", { minLength: { value: 50, message: "Sample must be at least 50 characters" }, required: { value: true, message: "Writing sample is required" } })}
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
                                        {...register("motivation", { minLength: { value: 20, message: "Motivation must be at least 20 characters" }, required: { value: true, message: "Motivation is required" } })}
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
                                    Become a Writer
                                </button>
                                <p className="text-sm font-semibold text-[#5a7184]">
                                    Not registered to climate connect?{" "}
                                    <Link to="/register" className="text-primary">
                                        Register here
                                    </Link>
                                </p>
                            </form>
                        </>
                    ) : (
                        <p className="text-center text-[#5a7184] font-semibold">
                            You are either not logged in or already a writer.
                        </p>
                    )}
                </div>
            </section>
        </MainLayout>
    );
};

export default UpgradeToWriterPage;
