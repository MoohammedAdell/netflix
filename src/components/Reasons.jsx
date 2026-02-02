import Title from "./Title";
import { FiMonitor, FiDownload } from "react-icons/fi";
import { BsMegaphone } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";

const reasonsCart = [
  {
    head: "Enjoy on your TV",
    desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: <FiMonitor size={48} />,
  },
  {
    head: "Download your shows to watch offline",
    desc: "Save your favorites easily and always have something to watch.",
    icon: <FiDownload size={48} />,
  },
  {
    head: "Watch everywhere",
    desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: <BsMegaphone size={48} />,
  },
  {
    head: "Create profiles for kids",
    desc: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    icon: <HiOutlineUsers size={48} />,
  },
];

function Reasons() {
  return (
    <div className="px-6 lg:px-36 my-16">
      <Title>More Reasons to Join</Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {reasonsCart.map((reason, index) => (
          <div
            key={index}
            className="
              relative
              lg:h-[310px]
              sm:h-[220px]
              h-[280px]
              rounded-2xl
              p-6
              bg-gradient-to-br
              from-[#29315f]
              to-pink-950/30
              text-white
              flex  
              flex-col
              justify-between
            "
          >
            {/* النص */}
            <div>
              <h2 className="text-xl font-bold mb-3">{reason.head}</h2>
              <p className="text-gray-300 text-md leading-relaxed">
                {reason.desc}
              </p>
            </div>

            {/* الأيقونة */}
            <div
              className="
    self-end
    text-[48px]
  text-pink-400
  "
            >
              {reason.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reasons;
