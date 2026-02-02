import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../supabase";
import AuthLayout from "../../components/AuthLayout";

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${import.meta.env.VITE_SITE_URL}/login`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
    } else {
      setSuccessMessage(
        "🎉 Account created successfully! Check your email to confirm your account.",
      );
      setLoading(false);

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold mb-6">Create your account</h2>

      {/* Success Message */}
      {successMessage && (
        <div className="mb-4 rounded bg-green-600/20 text-green-400 p-3 text-sm">
          {successMessage}
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="mb-4 rounded bg-red-600/20 text-red-400 p-3 text-sm">
          {errorMessage}
        </div>
      )}

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

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded font-semibold bg-red-600 transition ${
            loading ? "opacity-60 cursor-not-allowed" : "hover:bg-red-700"
          }`}
        >
          {loading ? "Creating your account..." : "Sign Up"}
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
