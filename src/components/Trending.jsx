import Title from "./Title";
import SwiperTrend from "./SwiperTrend";

function Trending() {
  return (
    <div className=" px-[2rem] lg:px-[9rem] my-12 md:my-18">
      <Title>Trending Now</Title>
      <div className="flex gap-4 my-4">
        <SwiperTrend/>
      </div>
    </div>
  );
}

export default Trending;
