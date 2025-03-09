"use client";  // Ensure this file runs on the client

import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff, ArrowRight } from "lucide-react"; 
import workFromHomeImage from "/public/images/image.png";
import unionLogo from "/public/icons/union.png";

import "@fontsource/inter-tight";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      
      {/* Top Section (Mobile Only) */}
      <div className="md:hidden bg-[#0D0D26] flex items-center justify-start py-4  rounded-b-3xl  pl-16 h-32 mb-10">
        <div className="flex items-center gap-2">
          <Image src={unionLogo} width={30} height={30} alt="Tracker Logo" />
          <span className="text-white text-xl italic font-interTight">Tracker</span>
        </div>
      </div>

      {/* Left Section (Desktop Only) */}
      <div className="hidden md:flex w-2/5 bg-[#0D0D26] relative items-center justify-center">
        <div className="absolute top-10 left-10 flex items-center gap-2">
          <Image src={unionLogo} width={24} height={24} alt="Tracker Logo" />
          <span className="text-white text-xl italic font-interTight">Tracker</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={workFromHomeImage}
            alt="Work from home"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>

      {/*  Right Section - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16">
        <h2 className="text-3xl font-semibold mb-2 text-gray-900">Create account.</h2>
        <p className="text-gray-500 mb-6">
          Already have an account?{" "}
          <a href="#" className="text-[#0A65CC] hover:underline">Log In</a>
        </p>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" className="input-field" />
          <input type="text" placeholder="Username" className="input-field" />
        </div>
        <input type="email" placeholder="Email address" className="input-field mt-4" />

        {/*  Password Field */}
        <div className="relative mt-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input-field pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/*  Confirm Password Field */}
        <div className="relative mt-4">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="input-field pr-10"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/*  Terms Checkbox */}
        <div className="flex items-center mt-4">
          <input type="checkbox" className="mr-2" />
          <p className="text-gray-500 text-sm">
            I've read and agree with your{" "}
            <a href="#" className="text-[#0A65CC] hover:underline">Terms of Services</a>
          </p>
        </div>

        {/*  Create Account Button */}
        <a href="/mywallet" className="w-full mt-6 bg-[#0A65CC] text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-800">
          Create Account <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
}
