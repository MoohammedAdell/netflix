import { Link } from "react-router-dom";
import headerIcon from "../../imgs/Netflix-nav.png";
import { IoLanguageSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import Langs from "../Langs";

function Header() {
  return (
    <div className="px-[.5rem] md:px-[2rem] lg:px-[8rem]  ">
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

          <button className="ml-2 lg:ml-4 font-medium bg-[var(--main-color)] py-0.3 text md:py-0.5 md:px-3 px-2 text-md lg:text-lg rounded-md transition-all cursor-pointer  hover:bg-[var(--hover-btn)] ">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
