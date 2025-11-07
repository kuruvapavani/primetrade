import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
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
          Login to NoteWise
        </h2>

        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
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
            Login
          </button>
        </form>

        <p className="mt-4 text-bg text-center">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-bg font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
