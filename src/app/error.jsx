"use client";
import { MdErrorOutline } from "react-icons/md";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-gray-900 bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center flex flex-col items-center">
        <MdErrorOutline className="text-9xl text-red-500 mb-4" />
        <h2 className="text-red-500 text-2xl font-semibold mb-4">Oops!</h2>
        <p className="text-red-500 mb-4">
          An error occurred while fetching data.
        </p>
        <button
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700"
          onClick={() => reset()}
        >
          Try it again
        </button>
      </div>
    </div>
  );
};

export default Error;
