import React, { useState } from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (form) => {
    if (isSignUp) {
      alert(`Sign Up Success!\nName: ${form.username}\nEmail: ${form.email}`);
    } else {
      alert(`Login Success!\nEmail: ${form.email}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-yellow-200 to-red-100">  
      <div className="w-full max-w-md bg-white/80 rounded-2xl shadow-2xl border-2 border-red-400 p-8">
        <h2 className="text-2xl font-bold text-red-600 mb-8 text-center tracking-wide">
          { isSignUp ? "Sign Up" : "Login" }
        </h2>
        <LoginForm onSubmit={handleSubmit} isSignUp={isSignUp} />
        <p>
          {isSignUp ? "Sudah punya akun?" : "Belum punya akun?"}{" "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="font-semibold text-yellow-500 ml-1 underline hover:text-yellow-700 transition"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;