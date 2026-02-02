import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../supabase";
import AuthLayout from "../../components/AuthLayout";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${import.meta.env.VITE_SITE_URL}/login`,
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert(
        "We’ve sent you a confirmation email. Please verify your account before logging in.",
      );
      navigate("/login");
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold mb-6">Create your account</h2>

      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 mb-4 bg-[#333] rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 mb-4 bg-[#333] rounded"
          required
        />

        <button className="w-full cursor-pointer bg-red-600 py-3 rounded font-semibold">
          Sign Up
        </button>
      </form>

      <p className="text-sm text-gray-400 mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-white hover:underline">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}

export default Signup;
