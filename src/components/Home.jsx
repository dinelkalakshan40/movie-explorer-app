import "./Home.css"
import {useEffect, useState} from "react";
import axios from "axios";



const Home = () => {

    const [movies, setMovies] = useState([]);


    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/discover/movie`,
                    {
                        params: {
                            api_key: "2d2cc07d66d8e55602a8506cadaf90ec",
                        },
                    }
                );
                setMovies(response.data.results);
            } catch (err) {
                console.error(err);
            }
        };

        fetchTrendingMovies();
    }, []);


    return (
        <div className="bg-gray-900 text-white min-h-screen">

            <div className="p-2 flex justify-between items-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center mx-auto mt-20 mb-8">
                    Discover Your Favorite Movies 🎬
                </h1>

            </div>


            <div className="flex justify-center mt-10 mb-16 px-4">
                <div
                    className="flex items-center w-full max-w-md bg-white dark:bg-gray-800 rounded-md shadow-md
    overflow-hidden transition-all duration-300 transform hover:shadow-lg
    focus-within:ring-2 focus-within:ring-blue-500 focus-within:scale-105"
                >
                    <input
                        type="text"
                        placeholder="Search for a movie..."
                        className="w-full px-4 py-2 text-black dark:text-white bg-transparent focus:outline-none"
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 transition duration-200"
                    >
                        Search
                    </button>
                </div>
            </div>


            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="bg-white dark:bg-gray-800 text-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 duration-300"
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-72 object-cover"
                        />

                        <div className="p-4 space-y-2">
                            <h2 className="text-lg font-semibold truncate">{movie.title}</h2>

                            <div className="flex items-center space-x-2">
                                <span
                                    className="bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">IMDb</span>
                                <span className="text-sm font-semibold text-white">
        {movie.vote_average?.toFixed(1)} <span className="text-yellow-100">⭐</span>
      </span>
                            </div>

                            <p className="text-xs text-gray-400">Year: {movie.release_date?.slice(0, 4)}</p>
                        </div>
                    </div>

                ))}
            </div>


            <div className="px-4 mt-6">
                <h2 className="text-xl font-semibold mb-2">Trending Movies</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

                </div>
            </div>


            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 hidden">
                <div
                    className="bg-white dark:bg-gray-800 text-black dark:text-white max-w-2xl w-full rounded-lg overflow-y-auto max-h-full p-6 relative">
                    <button className="absolute top-2 right-2 text-lg">✕</button>
                    <h2 className="text-2xl font-bold mb-2">Movie Title</h2>
                    <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">Movie description goes here...</p>
                    <p className="mb-2"><strong>Genres:</strong> Action, Drama</p>
                    <p className="mb-2"><strong>Rating:</strong> ⭐ 8.1</p>
                    <p className="mb-2"><strong>Cast:</strong> Actor 1, Actor 2, Actor 3</p>
                    <a
                        href="https://www.youtube.com/watch?v=trailer_id"
                        target="_blank"
                        className="text-blue-500 underline mt-4 inline-block"
                    >Watch Trailer</a>
                </div>
            </div>
        </div>
    )
}
export default Home;