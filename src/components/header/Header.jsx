import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import headerIcon from "../../imgs/Netflix-nav.png";
import Langs from "../Langs";
import { supabase } from "../../supabase";

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // أول ما الصفحة تفتح
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    // نسمع أي تغيير Login / Logout
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="px-[.5rem] md:px-[2rem] lg:px-[8rem]">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img
            className="w-[160px] lg:w-[200px]"
            src={headerIcon}
            alt="netflix header img"
          />
        </Link>

        <div className="flex items-center justify-center">
          <div className="relative inline-block">
            <Langs />
          </div>

          {user ? (
            <button
              onClick={handleLogout}
              className="ml-2 lg:ml-4 cursor-pointer font-medium bg-[var(--main-color)] py-1 md:py-0.5 md:px-3 px-1 text-[11px] lg:text-lg rounded-md transition-all hover:bg-[var(--hover-btn)]"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/login"
              className="ml-2 lg:ml-4 cursor-pointer font-medium bg-[var(--main-color)] py-0.3 md:py-0.5 md:px-3 px-2 text-md lg:text-lg rounded-md transition-all hover:bg-[var(--hover-btn)]"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
