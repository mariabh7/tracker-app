
"use client";
import { useRouter } from "next/navigation"; 
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function SignIn() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
    router.push("/mywallet");
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Top Section (Mobile Only) */}
      <div className="md:hidden bg-[#0A0E25] flex items-center justify-start py-4 rounded-b-3xl pl-16 h-32 mb-10">
        <div className="flex items-center gap-2">
          <Image src="/icons/union.png" alt="Logo Tracker" width={30} height={30} />
          <span className="text-white text-xl italic">Tracker</span>
        </div>
      </div>

      {/* Left Section (Desktop Only) */}
      <div className="hidden md:flex md:w-2/5 bg-[#0A0E25] relative items-center justify-center">
        <div className="absolute top-10 left-10 flex items-center gap-2 text-white/90">
          <Image src="/icons/union.png" alt="Logo Tracker" width={24} height={24} />
          <span className="text-xl italic">Tracker</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-[400px] h-[400px]">
            <Image src="/images/image.png" alt="Illustration" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16">
        <h2 className="text-3xl font-semibold mb-2 text-gray-900">Sign in</h2>
        <p className="text-gray-500 mb-6">
          Don't have an account?{" "}
          <Link href="#" className="text-[#2563EB] hover:underline">
            Create Account
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                Remember Me
              </label>
            </div>
            <Link href="#" className="text-sm text-[#2563EB] hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2563EB] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors mt-6"
          >
            Sign In <ArrowRight size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

