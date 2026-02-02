function FilmTrend({ movie, rank, onClick }) {
  return (
    <div
      onClick={() => onClick(movie)}
      className="relative flex items-end pl-10 cursor-pointer group  duration-300  hover:scale-105"
    >
      {/* الصورة */}
      <img
        src={movie.jawSummary?.backgroundImage?.url}
        alt={movie.jawSummary?.title}
        className="
          relative
          z-0
          w-[250px]
          h-[280px]
          object-cover
          rounded-md
          transition-transform
          cursor-pointer
        "
      />

      {/* الرقم */}
      <span
        className="
          absolute
          left-6
          bottom-4
          text-[100px]
          font-extrabold
          leading-none
          text-black
          select-none
          z-20
          pointer-events-none
        "
        style={{ WebkitTextStroke: "2px white" }}
      >
        {rank}
      </span>

      {/* اسم الفيلم */}
      <span
        className="
          absolute
          left-24
          bottom-8
          max-w-[200px]
          text-sm md:text-md
          font-bold
          text-white
          z-20
          pointer-events-none
          line-clamp-1
          drop-shadow-[0_8px_10px_rgba(0,0,0,0.9)]
        "
      >
        {movie.jawSummary?.title}
      </span>
    </div>
  );
}

export default FilmTrend;
