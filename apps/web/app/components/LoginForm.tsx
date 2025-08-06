"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";
import InputField from "./InputFields";
import Button from "./Button";
import LittleLink from "./LittleLink";
import GoogleSignInButton from "./GoogleSignInButton";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      router.push("/dashboard");
    } catch (error) {
      setError("Failed to log in. Please check your credentials.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-3xl font-manrope font-bold text-gray-900">
            Welcome Back to PeerCash!
          </h2>
          <p className="mt-2 text-sm font-inter text-gray-600">
            Sign In to Your Account
          </p>
        </div>

        <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
          <div className="bg-white">
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <InputField
              label="Your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />

            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 text-sm text-gray-700"
                >
                  Remember Me
                </label>
              </div>
              <LittleLink
                linkText="Forgot Password?"
                href="/forgotPassword"
                text="none"
                mainTextColor="grey"
                textColor=""
                hoverText="#171717"
              />
            </div>

            <div className="mt-8">
              <Button type="submit" variant="secondary" disabled={loading} className="w-full">
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </div>

            <div className="mt-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <GoogleSignInButton disabled={loading} />
            </div>

            <div className="text-center mt-6">
              <LittleLink
                text="Don't have an account?"
                linkText="Register"
                href="/register"
                mainTextColor="grey"
                textColor="#5945FD"
                hoverText="blue"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
