import React from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import MainLayout from "../../components/MainLayout";
import { upgradeToWriter } from "../../services/index/users.js";

const UpgradeToWriterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  // Only allow if user is logged in and not already a writer
  const isEligible = userState.userInfo && !userState.userInfo.writer;

  const { mutate, isLoading } = useMutation({
    mutationFn: () => {
      // You should implement upgradeToWriter to update the user profile
      console.log("Upgrading user to writer:", userState.userInfo);
      return upgradeToWriter({ user: userState.userInfo });
    },
    onSuccess: (data) => {
      toast.success("You are now a writer!");
      // Update user info in redux/localStorage
      dispatch({ type: "USER_SET_INFO", payload: { ...userState.userInfo, writer: true } });
      localStorage.setItem("account", JSON.stringify({ ...userState.userInfo, writer: true }));
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const handleUpgrade = () => {
    mutate();
  };

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-lg mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
            Become Writer
          </h1>
          {isEligible ? (
            <>
              <p className="mb-6 text-center text-[#5a7184] font-semibold">
                Click below to become a writer. You will be able to submit articles and participate as a content creator.
              </p>
              <button
                onClick={handleUpgrade}
                disabled={isLoading}
                className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg mb-6 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                Become a Writer
              </button>
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
