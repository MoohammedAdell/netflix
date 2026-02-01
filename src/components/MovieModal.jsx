import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
  <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
      onClick={onClose}
    >      {/* الكارت */}
      <div  onClick={(e) => e.stopPropagation()} className="relative w-[90%] max-w-3xl bg-[#141414] rounded-xl overflow-hidden">
        {/* زرار إغلاق */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4  z-999 cursor-pointer  text-2xl"
        >
          <MdOutlineClose />
        </button>

        {/* صورة */}
        <div className="relative h-[350px]">
          <img
            src={movie.jawSummary?.backgroundImage?.url}
            alt={movie.jawSummary?.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />
        </div>

        {/* المحتوى */}
        <div className="p-6 text-white">
          <h2 className="text-3xl font-bold mb-2">{movie.jawSummary?.title}</h2>

          <div className="flex flex-wrap items-center gap-2 text-sm mb-3">
            {/* السنة */}
            {movie.jawSummary?.releaseYear && (
              <span className="px-2 py-1 bg-gray-700/70 rounded">
                {movie.jawSummary.releaseYear}
              </span>
            )}

            {/* العمر */}
            {movie.jawSummary?.maturity?.rating?.value && (
              <span className="px-2 py-1 border border-gray-500 rounded">
                {movie.jawSummary.maturity.rating.value}
              </span>
            )}

            {/* النوع */}
            {movie.jawSummary?.type && (
              <span className="px-2 py-1 bg-gray-700/70 rounded capitalize">
                {movie.jawSummary.type}
              </span>
            )}

            {/* أول Genre بس */}
            {movie.jawSummary?.genres?.[0]?.name && (
              <span className="px-2 py-1 bg-gray-700/70 rounded">
                {movie.jawSummary.genres[0].name}
              </span>
            )}
          </div>

          <p className="text-sm text-gray-300 mb-4">
            {movie.jawSummary?.synopsis || "No description available."}
          </p>

          <button className="bg-red-600 flex items-center gap-2 hover:bg-red-700 px-4 py-2 rounded text-white font-bold">
            Get Started <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
