import Allmovies from "@/hooks/Allmovies";
import useBillboard from "@/hooks/useBillboards";
import React from "react";
import Movie from "./Movie";
import movieData from "@/lib/movie.json";
import {AiOutlineInfoCircle} from "react-icons/ai"
const Billboard = async () => {
  const data = await Allmovies();
  // console.log(data)
  const randomIndex = Math.floor(Math.random() * 4);
  const randomMovie = movieData[randomIndex]
  return (
    <div className="relative h-[56.25vw]">
      <video 
      className="w-full
        h-[56.25vw]
        object-cover
        brightness-[60%]
      "
      autoPlay muted loop src={randomMovie.videoUrl} poster={randomMovie.thumbnailUrl}></video>
      <div className="absolute top-30% md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {randomMovie.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {randomMovie.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 ggap-3">
          <button className="bg-white text-white bg-opacity-30 rounded-md gap-2 py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
            <AiOutlineInfoCircle />
            More Info
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 px-4 md:px-16">
        {data.results.map((movie: any) => (
          <div key={movie.title} className="text-white">
            <Movie
              title={movie.title}
              description={movie.overview}
              poster_path={movie.poster_path}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Billboard;
