import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


const MovieDetails=()=>{

    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                    params: {
                        api_key: "2d2cc07d66d8e55602a8506cadaf90ec",
                    },
                });
                setMovie(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchMovie();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }
    return(
        <>
            <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white py-24 px-6 md:px-12">

                <div className="absolute inset-0">
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt={movie.title}
                        className="object-cover w-full h-full opacity-30"
                    />
                </div>
                <div
                    className="relative container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
                    <div className="md:w-1/3">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="rounded-lg shadow-2xl w-full md:w-80"
                        />
                    </div>
                    <div className="md:w-2/3 text-center md:text-left">
                        <h1 className="text-4xl text-left font-bold text-white mb-4 leading-tight drop-shadow-lg">
                            {movie.title}
                        </h1>
                        <p className="text-lg mb-4 text-white">{movie.release_date?.slice(0, 4)}</p>
                        <p className="text-lg mb-6">{movie.overview}</p>
                        <div className="flex items-center justify-start space-x-6">
                            <span
                                className="bg-yellow-400 text-black text-10px font-bold px-2 py-0.5 rounded">IMDb</span>
                            <span className="text-xl font-semibold text-white">{movie.vote_average?.toFixed(1)}</span>
                            <p className="text-sm text-gray-400">
                                Genres: {movie.genres?.map(g => g.name).join(", ")}
                            </p>
                        </div>

                        <div className="mt-8">
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300">
                                Watch Trailer
                            </button>
                            <button
                                className="ml-4 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300">
                                Add to Favorites
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MovieDetails;