import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center w-3/4 mx-auto mt-10 gap-4">
      <h1 className="text-3xl text-red-500 font-bold">About Us</h1>
      <p className="text-xl">
        Welcome to our movie database website! We are a team of passionate movie
        enthusiasts who have come together to create a one-stop destination for
        all your movie-related needs.
      </p>
      <p className="text-xl">
        Our team of experts has years of experience in the industry, and we have
        a deep understanding of the latest trends and techniques. We understand
        that finding the perfect movie can be overwhelming, and we strive to
        make it as easy and convenient as possible.
      </p>
      <p className="text-xl">
        Our website offers a wide range of movies, from classic movies to
        Blockbuster hits. We also have a user-friendly interface, so you can
        easily browse and search for movies. Our team of experts is always
        available to answer any questions you may have.
      </p>
    </div>
  );
}
