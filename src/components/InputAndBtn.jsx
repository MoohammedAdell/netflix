import { IoIosArrowForward } from "react-icons/io";

function InputAndBtn() {
  return (
    <div className="flex flex-col items-center">
      
      {/* Text */}
      <div className="text-center pb-6">
        <p>Ready to watch? Enter your email to create or restart your</p>
        <span>membership.</span>
      </div>

      {/* Input + Button */}
      <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto items-center">
        
        <input
          type="email"
          placeholder="Email address"
          className="bg-black/40 py-4 px-4 w-full md:w-[320px] rounded-sm border border-white/40"
        />

        <button
          className="
            w-full md:w-auto
            font-medium
            bg-[var(--main-color)]
            py-3 px-4
            text-lg md:text-2xl
            rounded-md
            transition-all
            cursor-pointer
            hover:bg-[var(--hover-btn)]
          "
        >
          <div className="flex items-center justify-center gap-2">
            Get Started <IoIosArrowForward />
          </div>
        </button>

      </div>
    </div>
  );
}

export default InputAndBtn;
