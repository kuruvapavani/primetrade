import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }
    localStorage.setItem("token", "dummy-token");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg font-poppins">
      <div className="bg-hero p-8 rounded-2xl shadow-xl w-full max-w-md animate-fadeIn">
        <h2 className="text-3xl font-bold text-bg mb-6 text-center">
          Create an Account
        </h2>

        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}

        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-lg border border-secColour bg-secColour text-hero placeholder-hero focus:outline-none focus:ring-2 focus:ring-bg transition duration-300"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg border border-secColour bg-secColour text-hero placeholder-hero focus:outline-none focus:ring-2 focus:ring-bg transition duration-300"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 rounded-lg border border-secColour bg-secColour text-hero placeholder-hero w-full focus:outline-none focus:ring-2 focus:ring-bg transition duration-300"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-hero hover:text-headingSub transition duration-300"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="bg-bg text-hero font-bold py-3 rounded-lg hover:bg-headingSub transition-all duration-300"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-bg text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-bg font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
