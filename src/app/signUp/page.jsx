"use client"; // Ensure this file runs on the client
import axios from "axios";
import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import workFromHomeImage from "/public/images/image.png";
import unionLogo from "/public/icons/union.png";
import { useRouter } from "next/navigation";

export default function Register() {
  const [error, setError] = useState("");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
         router.push("/mywallet");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register/", {
        full_name: formData.fullName,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 201) {
        localStorage.setItem("userName", formData.fullName); // store the full name in username
        router.push("/signin"); // Redirect to login page
      } else {
        setError("Registration failed");
      }
    } catch (err) {
      setError(
        err.response?.data?.error || "Server error, please try again later"
      );
    }
  };
    // during the absence of the backend this will let the user know that they can't register and login using any kind of accounts
  // the above function shows how we integrated the sign up with the back . the backend part works locally but we couldn't catch its deployment
function showWarning() {
    alert("so sorry to tell you that we failed in deploying the back end part you gotta just press the login button instead and fill the form with any infos to get redirected to mywallet page ! thank you ");
}
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="md:hidden bg-[#0D0D26] flex items-center justify-start py-4 rounded-b-3xl pl-16 h-32 mb-10">
        <div className="flex items-center gap-2">
          <Image src={unionLogo} width={30} height={30} alt="Tracker Logo" />
          <span className="text-white text-xl italic font-interTight">
            Tracker
          </span>
        </div>
      </div>

      <div className="hidden md:flex w-2/5 bg-[#0D0D26] relative items-center justify-center">
        <div className="absolute top-10 left-10 flex items-center gap-2">
          <Image src={unionLogo} width={24} height={24} alt="Tracker Logo" />
          <span className="text-white text-xl italic font-interTight">
            Tracker
          </span>
        </div>
        <Image
          src={workFromHomeImage}
          alt="Work from home"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16">
        <h2 className="text-3xl font-semibold mb-2 text-gray-900">
          Create account.
        </h2>
        <p className="text-gray-500 mb-6">
          Already have an account?{" "}
          <button
            onClick={() => router.push("/signin")}
            className="text-[#0A65CC] hover:underline"
          >
            Log In
          </button>
        </p>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              className="input-field"
              onChange={handleChange}
              required
            />
            <input
              name="username"
              type="text"
              placeholder="Username"
              className="input-field"
              onChange={handleChange}
              required
            />
          </div>
          <input
            name="email"
            type="email"
            placeholder="Email address"
            className="input-field mt-4"
            onChange={handleChange}
            required
          />

          <div className="relative mt-4">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input-field pr-10"
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>

          <div className="relative mt-4">
            <input
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="input-field pr-10"
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>

          <div className="flex items-center mt-4">
            <input
              name="agreedToTerms"
              type="checkbox"
              className="mr-2"
              onChange={handleChange}
              required
            />
            <p className="text-gray-500 text-sm">
              I've read and agree with your{" "}
              <a href="#" className="text-[#0A65CC] hover:underline">
                Terms of Services
              </a>
            </p>
          </div>

          <button
            onclick="showWarning()"
            type="submit"
            className="w-full mt-6 bg-[#0A65CC] text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-800"
          >
            Create Account <ArrowRight size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
