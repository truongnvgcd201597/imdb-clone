// lib/axios.js
import axios from "axios";

const apiKey = "7bf3a64dd4a359d1c057eec95922510f";
const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmYzYTY0ZGQ0YTM1OWQxYzA1N2VlYzk1OTIyNTEwZiIsInN1YiI6IjY2NGFiNzc0NzNjZGI0NGJiZjJmZGI1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.90m_sFTTPcdn0Oz_09mYAM9cRluy1YoOod0G2fiIFyY";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 5000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
  params: {
    api_key: apiKey,
  },
});

export default axiosInstance;
