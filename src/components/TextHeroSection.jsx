import InputAndBtn from "./InputAndBtn";

function TextHeroSection() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-[130px] lg:pt-[150px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="md:text-6xl text-2xl lg:text-3xl pl-5 font-black">
            Unlimited movies, TV
          </h1>
          <h1 className="md:text-6xl text-2xl lg:text-3xl font-black py-2 pb-5">
            {" "}
            shows, and more
          </h1>
          <h4 className="font-medium pb-4 text-sm lg:text-lg ">
            Starts at EGP 100. Cancel anytime.
          </h4>
        </div>
        <InputAndBtn />
      </div>
    </>
  );
}

export default TextHeroSection;
