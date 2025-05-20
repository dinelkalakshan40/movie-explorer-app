import {favoritesMovies} from "../store/favorites.js";


const FavoriteMovies = () => {
    if (favoritesMovies.length === 0) {
        return <div className="text-white mt-10 text-center">No favorite movies yet.</div>;
    }
    return (
        <div
            className="relative min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">

            <div className="relative z-10 p-6">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center mb-12 mt-20">
                    Your Favorite Movies
                </h1>

                {favoritesMovies.length === 0 ? (
                    <p className="text-center text-gray-300 text-lg">No favorite movies added yet.</p>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
                        {favoritesMovies.map((movie) => (
                            <div key={movie.id} className="bg-gray-800 rounded-lg shadow-lg p-4">
                                <img
                                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                    alt={movie.title}
                                    className="rounded-md mb-3 w-full"
                                />
                                <h2 className="text-xl font-semibold mb-1">{movie.title}</h2>
                                <p className="text-sm text-gray-400 mb-1">
                                    <span
                                        className="text-yellow-400 font-semibold">IMDb:</span> {movie.vote_average?.toFixed(1)}
                                </p>
                                <p className="text-sm text-gray-400 mb-1">
                                    <span
                                        className="text-yellow-400 font-semibold">Year:</span> {movie.release_date?.slice(0, 4)}
                                </p>
                                <p className="text-sm text-gray-400">
                                    <span className="text-yellow-400 font-semibold">Genres:</span>{" "}
                                    {movie.genres?.map((g) => g.name).join(", ") || "N/A"}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
export default FavoriteMovies;