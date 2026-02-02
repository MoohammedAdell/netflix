import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../supabase";
import AuthLayout from "../../components/AuthLayout";

function Login() {
  const navigate = useNavigate();
  const ref = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg("Email or password is incorrect");
    } else {
      navigate("/");
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold mb-2">Enter your info to sign in</h2>
      <p className="text-gray-300 mb-6">Or get started with a new account.</p>

      <form onSubmit={handleLogin}>
        <input
          ref={ref}
          type="email"
          placeholder="Email or mobile number"
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

        {errorMsg && <p className="text-red-500 text-sm mb-3">{errorMsg}</p>}

        <button className="w-full cursor-pointer bg-red-600 py-3 rounded font-semibold">
          Sign In
        </button>
      </form>

      <p className="text-sm text-gray-400 mt-4 text-center">
        New to Netflix?{" "}
        <Link to="/signup" className="text-white hover:underline">
          Sign up now
        </Link>
      </p>
    </AuthLayout>
  );
}

export default Login;
