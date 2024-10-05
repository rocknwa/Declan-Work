import { signIn } from "@/api/authService";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(""); 
    setIsError(false);// Start loading state
    try {
      await signIn(email, password);
      setIsAuthenticated(true);
      navigate("/dashboard");
    } catch (err) {
      setIsAuthenticated(false);
      setErrorMessage(err.message);
      setIsError(true);
    } finally {
      setIsLoading(false); // Stop loading state
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(location.state?.from || "/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col">
      <div className="w-[700px] mx-auto my-9 border border-[#E9E9E9] rounded-2xl p-6 text-center">
        <div className="mb-6">
          <h2 className="text-base font-semibold text-[#6A6A6A]">
            Welcome Back
          </h2>
          <p className="text-[#202020] mt-2 text-2xl font-semibold">
            Log in to your account
          </p>
        </div>

        {/* Social Sign In */}
        <div className="space-y-4 mb-6">
          <button className="w-full flex items-center justify-center border border-[#E9E9E9] py-2 rounded-full text-sm">
            <img
              src="/icons/google_symbol.svg"
              alt="Google Icon"
              className="mr-2"
            />
            Sign In with Email
          </button>
          <button className="w-full flex items-center justify-center border border-[#E9E9E9] py-2 rounded-full text-sm">
            <img
              src="/icons/linkedIn.svg"
              alt="LinkedIn Icon"
              className="mr-2"
            />
            Sign In with LinkedIn
          </button>
        </div>

        <div className="flex items-center mb-4">
          <div className="h-[1px] bg-[#E9E9E9] flex-1"></div>
          <p className="text-[#202020] flex-1">OR CONTINUE WITH</p>
          <div className="h-[1px] bg-[#E9E9E9] w-full flex-1"></div>
        </div>

        {/* Email and Password Input Fields */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-left">
            <label className="block text-sm text-black">Email</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cn("w-full p-3 border border-[#E9E9E9] text-[#202020] bg-transparent rounded-lg focus:outline-none mt-1",
                isError && "bg-red-200 border-red-300 ",
              )}
              required
            />
          </div>

          <div className="mb-2 text-left">
            <label className="block text-sm text-black">Password</label>
            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={cn("w-full p-3 border border-[#E9E9E9] text-[#202020] bg-transparent rounded-lg focus:outline-none mt-1",
                  isError && "bg-red-200 border-red-300 ",
                )}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-4 underline text-sm text-[#4D4D4D]"
              >
                {isPasswordVisible ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <p className="text-sm text-[#0E4C25] text-left mb-6 cursor-pointer">
            <a href="/forgot-password">Forgot Password?</a>
          </p>

          <button
            type="submit"
            disabled={!email || !password || isLoading} // Disable button while loading
            className="w-full relative bg-[#21B557] disabled:bg-gray-300 disabled:text-[#989898] text-white rounded-full py-3 font-medium text-sm"
          >
            Login
            {isLoading && (
              <img
                src="/icons/spinner.svg"
                className="absolute w-[30px] h-[30px] top-[15%] left-[42%] transition-transform transform rotate-180 repeat-infinite"
                alt="Loading"
              />
            )}
          </button>

          { isError && <p className="text-red-500 mt-3 text-sm">{errorMessage}</p>}
        </form>

        <p className="mt-6 text-sm text-[#667085]">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-[#21B557] font-medium cursor-pointer">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
