import "./Home.css"
import {useEffect, useState} from "react";
import axios from "axios";



const Home = () => {

    const [movies, setMovies] = useState([]);
    const [genres,setGenres]=useState([]);
    const [query, setQuery] = useState("");
    const [hasSearched, setHasSearched] = useState(false);


    useEffect(() => {
        const fetchMovies = async () => {
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

        fetchMovies();
    }, []);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                const res = await axios.get("https://api.themoviedb.org/3/trending/movie/day", {
                    params: {
                        api_key: "2d2cc07d66d8e55602a8506cadaf90ec",
                    },
                });
                setMovies(res.data.results);
            } catch (err) {
                console.error(err);
            }
        };

        fetchTrendingMovies();
    }, []);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const res = await axios.get("https://api.themoviedb.org/3/genre/movie/list", {
                    params: {
                        api_key: "2d2cc07d66d8e55602a8506cadaf90ec",
                    },
                });
                setGenres(res.data.genres);
            } catch (err) {
                console.error(err);
            }
        };

        fetchGenres();
    }, []);

    const getGenreNames = (genreIds) => {
        return genreIds
            .map((id) => genres.find((genre) => genre.id === id)?.name)
            .join(", ");
    };

    const handleSearch = async () => {
        if (!query) return;
        setHasSearched(true);

        try {
            const res = await axios.get("https://api.themoviedb.org/3/search/movie", {
                params: {
                    api_key: "2d2cc07d66d8e55602a8506cadaf90ec",
                    query: query,
                },
            });
            setMovies(res.data.results);
        } catch (err) {
            console.error(err);
        }
    };
    const handleInputChange = (e) => {
        setQuery(e.target.value);
        if (e.target.value === "") {
            fetchTrendingMovies();
            fetchMovies();
            setMovies([]);
            setHasSearched(false);
        }
    };
    const fetchMovies = async () => {
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

    const fetchTrendingMovies = async () => {
        try {
            const res = await axios.get("https://api.themoviedb.org/3/trending/movie/day", {
                params: {
                    api_key: "2d2cc07d66d8e55602a8506cadaf90ec",
                },
            });
            setMovies(res.data.results);
        } catch (err) {
            console.error(err);
        }
    };


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
                        type="text" value={query}
                        onChange={handleInputChange}
                        placeholder="Search for a movie..."
                        className="w-full px-4 py-2 text-black dark:text-white bg-transparent focus:outline-none"
                    />
                    <button onClick={handleSearch}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 transition duration-200"
                    >
                        Search
                    </button>
                </div>
            </div>

            {hasSearched && query && movies.length > 0 && (
                <h2 className="col-span-full text-xl font-semibold text-white px-4">Search Results</h2>
            )}


            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">{movies.length === 0 && query && hasSearched  ? (
                <p className="col-span-full text-center text-gray-500">No movies found.</p>
            ) :(
                movies.map((movie) => (
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
                                <span className="text-sm font-semibold text-white">{movie.vote_average?.toFixed(1)} <span className="text-yellow-100">⭐</span></span>
                            </div>

                            <p className="text-xs text-gray-400">Year: {movie.release_date?.slice(0, 4)}</p>
                            <p className="text-xs text-gray-400">Genres: {getGenreNames(movie.genre_ids)}</p>
                        </div>
                    </div>

                ))

            )}

            </div>


            {!(hasSearched && query) && (
                <div className="mt-6 mb-4">
                    <h2 className="text-xl mx-5 font-semibold mb-2">Trending Movies</h2>
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
                                    <p className="text-xs text-gray-400">Genres: {getGenreNames(movie.genre_ids)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            )}

        </div>
    )
}
export default Home;