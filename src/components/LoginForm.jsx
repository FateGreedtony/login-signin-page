import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const LoginForm = ({ onSubmit, isSignUp }) => {
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-yellow-100 via-yellow-200 to-red-100 border-2 border-red-500 shadow-xl rounded-2xl px-8 py-10 max-w-md mx-auto mt-10"    
    >

      <div className="mb-6">
          <label className="text-yellow-700 font-semibold" htmlFor="username">
            Username
              <Input
                  className="w-full border-2 border-yellow-400 rounded-lg py-2 px-3 focus:outline-none focus:border-red-500 transition"
                  type="text"
                  name="username"
                  placeholder="Enter your Username"
                  value={form.username}
                  onChange={handleChange}
              />
          </label>
      </div>
        

        <div className="mb-6">
          <label className="text-yellow-700 font-semibold" htmlFor="email">
            E-mail
              <Input
              type="email"
              name="email"
              value={form.email}
              className="w-full border-2 border-yellow-400 rounded-lg py-2 px-3 focus:outline-none focus:border-red-500 transition"
              placeholder="Enter Your Email"
              onChange={handleChange}
            />
          </label>
        </div>

      <div>
        <label className="text-yellow-700 font-semibold" htmlFor="password">
          Password
            <Input
              type="password"
              name="password"
              value={form.password}
              className="w-full border-2 border-yellow-400 rounded-lg py-2 px-3 focus:outline-none focus:border-red-500 transition"
              placeholder="Enter your Password"
              onChange={handleChange}
            />
          </label>
      </div>
      
      <Button 
        type="submit"
        className="w-full bg-gradient-to-r from-red-500 via-yellow-400 text-gray-400 font-bold py-2 rounded-lg shadow-md hover:from-yellow-500 hover:to-red-500 hover:scale-105 transition"
      >
        {isSignUp ? "Sign Up" : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;