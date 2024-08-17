import axios from "axios";

const API_KEY = "1091b85cfb1d620c2ad1642a2ab3f60a";

// axios.defaults.baseURL = "htpps://api.themoviedb.org/3";
// axios.defaults.headers = {
//   Authorization:
//     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDkxYjg1Y2ZiMWQ2MjBjMmFkMTY0MmEyYWIzZjYwYSIsIm5iZiI6MTcyMzczMTQxMy44NDQzMzksInN1YiI6IjY2YmNjOTEzZjRmNDljMmZmMGUxZTM2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gfGa6juG6_LqYP6ParzPyYagmIMpqTxeV41KbvFK-Ko",
// };

export const fetchTrendingMovies = async () => {
  console.log(987);
  const response = await axios.get(
    "htpps://api.themoviedb.org/3/trending/movie/day"
  );
  console.log(response.data);
  return response.data;
};
