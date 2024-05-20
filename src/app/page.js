"use client";

import { useEffect, useState } from "react";
import MovieItem from "@/components/MovieItem";
import axiosInstance from "@/http/axios";
import Error from "./error";
import Loading from "./feed/loading";
import Link from "next/link";

export default function Home({ params }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const genre = params?.genre || "fetchTrending";

    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get(
          `/movie/${
            genre === "fetchTrending" ? "top_rated" : "trending/all/week"
          }`
        );
        const result = await response.data;
        setMovies(result.results);
      } catch (err) {
        console.error("Failed to fetch movies:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchMovies();
    }, 1000);

    return () => clearTimeout(timer);
  }, [params]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 w-11/12 mx-auto">
      {movies.map((movie) => (
        <Link key={movie.id} href={`/movie/${movie.id}`}>
          <div key={movie.id} className="aspect-ratio w-full ">
            <MovieItem movie={movie} />
          </div>
        </Link>
      ))}
    </div>
  );
}
