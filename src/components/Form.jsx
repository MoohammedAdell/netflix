import { useEffect, useRef, useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  const ref = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    // تجربة تسجيل الدخول
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      // لو مش موجود حاول نعمل Signup
      const { error: signupError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signupError) {
        alert(signupError.message);
      } else {
        alert("Account created! You can login now.");
      }
    } else {
      // نجاح تسجيل الدخول → روح للهوم
      navigate("/");
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <input
        onChange={(e) => setEmail(e.target.value)}
        ref={ref}
        type="email"
        placeholder="Email or mobile number"
        className="w-full p-4 mb-4 bg-black/40 border border-gray-500 rounded focus:outline-none focus:border-white"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter Your Password"
        className="w-full p-4 mb-4 bg-black/40 border border-gray-500 rounded focus:outline-none focus:border-white"
      />

      <button
        type="submit"
        className="w-full cursor-pointer bg-red-600 hover:bg-red-700 transition py-4 rounded-md font-semibold text-lg"
      >
        Continue
      </button>
    </form>
  );
}

export default Form;
