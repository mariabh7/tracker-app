import Image from "next/image";
import workFromHomeImage from "/public/images/Work from home.png";
export default function Register() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex w-1/2 bg-[#0D0D26] items-center justify-center">
        <Image
          src={workFromHomeImage}
          alt="Work from home"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-10">
        <h2 className="text-3xl font-semibold mb-2">Create account.</h2>
        <p className="text-gray-500 mb-6">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Log In
          </a>
        </p>

        {/* Input Fields */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="input-field"
          />
          <input
            type="text"
            placeholder="Username"
            className="input-field"
          />
        </div>
        <input type="email" placeholder="Email address" className="input-field mt-4" />
        <div className="relative mt-4">
          <input type="password" placeholder="Password" className="input-field pr-10" />
          <span className="eye-icon">👁️</span>
        </div>
        <div className="relative mt-4">
          <input type="password" placeholder="Confirm Password" className="input-field pr-10" />
          <span className="eye-icon">👁️</span>
        </div>

        {/* Checkbox */}
        <div className="flex items-center mt-4">
          <input type="checkbox" className="mr-2" />
          <p className="text-gray-500 text-sm">
            I've read and agree with your{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Services
            </a>
          </p>
        </div>

        {/* Submit Button */}
        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700">
          Create Account →
        </button>
      </div>
    </div>
  );
}
