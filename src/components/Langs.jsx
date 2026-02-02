import { IoMdArrowDropdown } from "react-icons/io";
import { IoLanguageSharp } from "react-icons/io5";

function Langs() {
  return (
    <>
      <IoLanguageSharp className="absolute left-2 top-2 text-white" />

      <select
        className="
      appearance-none
      bg-black/35 text-white
      border border-gray-400
      rounded-md
      py-1 lg:py-1.5 lg:pl-9 lg:pr-8
      pl-7 pr-6
      cursor-pointer
      text-sm
    "
      >
        <option value="en">English</option>
        <option value="ar">Arabic</option>
      </select>
      <span className="absolute text-lg right-2 top-1/2 -translate-y-1/2 text-white pointer-events-none">
        <IoMdArrowDropdown />
      </span>
    </>
  );
}

export default Langs;
