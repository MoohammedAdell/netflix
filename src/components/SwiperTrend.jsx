import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import FilmTrend from "./film/FilmTrend";
import { searchNetflix } from "../api/NetflixApi";
import MovieModal from "./MovieModal";

function SwiperTrend() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchTrend = async () => {
      try {
        const data = await searchNetflix("stranger");
        setMovies(data.titles);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrend();
  }, []);

  if (loading) return <p className="text-white">Loading...</p>;
  console.log(movies);

  return (
    <>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 2.5,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 3.5,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        }}
        className="mySwiper"
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={movie.id}>
            <FilmTrend
              movie={movie}
              rank={index + 1}
              onClick={setSelectedMovie}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </>
  );
}

export default SwiperTrend;
