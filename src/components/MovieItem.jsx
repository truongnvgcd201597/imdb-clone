import React from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";

export default function MovieItem({ movie }) {
  const overview = movie.overview.slice(0, 90).replace(/\W+$/, "");

  return (
    <div className="flex flex-col items-center w-full hover:scale-105 transition hover:ease-in duration-300 border border-gray-300 p-4 rounded-lg space-y-2 cursor-pointer">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="w-full h-auto object-cover"
        alt={movie.title}
        title={movie.title}
      />
      <p className="dark:text-slate-300 text-slate-500 text-xs font-light">
        {overview}...
      </p>
      <h4 className="dark:text-white text-black font-bold text-lg text-center text-nowrap">
        {movie.original_title}
      </h4>
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          <MdDateRange className="text-red-500" />
          <p className="text-red-500 text-sm">{movie.release_date}</p>
        </div>
        <div className="flex items-center">
          <AiTwotoneLike className="text-red-500" />
          <p className="text-red-500 text-sm">{movie.vote_count} votes</p>
        </div>
      </div>
    </div>
  );
}
