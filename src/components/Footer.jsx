import React from "react";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
  AiFillHeart,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { images } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-dark-hard text-dark-light py-10">
      <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        
        {/* Logo + Socials */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img
            src={images.Logo}
            alt="Logo"
            className="brightness-0 invert w-24"
          />
          <ul className="flex gap-4 text-gray-300">
            <li><a href="/" aria-label="Twitter"><AiOutlineTwitter className="w-6 h-6" /></a></li>
            <li><a href="/" aria-label="YouTube"><AiFillYoutube className="w-6 h-6" /></a></li>
            <li><a href="/" aria-label="Instagram"><AiFillInstagram className="w-6 h-6" /></a></li>
            <li><a href="/" aria-label="Facebook"><FaFacebook className="w-6 h-6" /></a></li>
            <li><a href="/" aria-label="Telegram"><BsTelegram className="w-6 h-6" /></a></li>
          </ul>
        </div>

        {/* Middle Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center md:text-left">
          <h3 className="font-semibold"><a href="/">Home Page</a></h3>
          <h3 className="font-semibold"><a href="/">Contact Us</a></h3>
          <h3 className="font-semibold"><a href="/about">About Us</a></h3>
          <h3 className="font-semibold"><a href="/mission">Our Mission</a></h3>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="italic font-bold">
            © {new Date().getFullYear()} Crafted with love.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
