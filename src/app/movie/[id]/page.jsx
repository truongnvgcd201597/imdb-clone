import axiosInstance from "@/http/axios";
import { MdDateRange } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";

export default async function MovieDetail(movieId) {
  const {
    params: { id },
  } = movieId;

  const response = await axiosInstance.get(`/movie/${id}`);
  const result = await response.data;
  return (
    <div className="w-10/12 h-screen mx-auto flex justify-between items-center">
      <div className="w-1/2">
        <img
          src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
          className="rounded-lg w-1/2"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-4 justify-center">
        <h1 className="text-3xl font-bold indent-2">{result.title}</h1>
        <div className="flex items-center gap-2">
          {result.genres.map((genre) => (
            <p key={genre.id} className="bg-red-500 text-white px-4 rounded-xl">
              {genre.name}
            </p>
          ))}
        </div>
        <p className="text-pretty">{result.overview}</p>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <MdDateRange className="text-xl text-red-500" />
            <p className="text-red-500">{result.release_date}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaStar className="text-xl text-red-500" />
            <p className="text-red-500">{result.vote_average}</p>
          </div>
          <div className="flex items-center gap-2">
            <IoIosTimer className="text-xl text-red-500" />
            <p className="text-red-500">{result.runtime} min</p>
          </div>
        </div>
      </div>
    </div>
  );
}
