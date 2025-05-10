import "./Home.css"
import {useState} from "react";

import { FaSun, FaMoon } from "react-icons/fa";


const Home=()=>{
    const[darkMode,setDarkMode]=useState(false);
    const changeDarkMode= () => setDarkMode(!darkMode);

    return (
        <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>

            <div className="p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Movie Explorer</h1>
                <button onClick={changeDarkMode} className="text-xl">
                    {darkMode ? (
                        <FaSun className="text-yellow-400"/>
                    ) : (
                        <FaMoon className="text-blue-500"/>
                    )}
                </button>
            </div>


            <div className="flex justify-center mt-20 px-4">
                <div
                    className="flex items-center w-full max-w-md bg-white dark:bg-gray-800 rounded-md shadow-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-400 transition-all duration-300 hover:shadow-lg focus-within:scale-105">
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


            <div className="px-4">
                <h2 className="text-xl font-semibold mb-2">Search Results</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

                    <div className="cursor-pointer hover:scale-105 transform transition duration-200">
                        <img
                            src="https://image.tmdb.org/t/p/w500/sample.jpg"
                            alt="Movie Title"
                            className="rounded-lg shadow-md"
                        />
                        <div className="mt-2">
                            <h3 className="font-semibold text-sm">Movie Title</h3>
                            <p className="text-xs text-gray-500">2024</p>
                            <p className="text-xs text-yellow-500">⭐ 7.8</p>
                        </div>
                    </div>
                </div>
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