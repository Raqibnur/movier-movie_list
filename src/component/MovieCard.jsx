import React from 'react';
import yearIcon from '../assets/year.svg'
import '../App.css'

const MovieCard =({movie }) => {
    return(
        <>
            <div className="relative m-3 border border-gray-300 rounded-lg shadow-sm border-opacity-20">
                <div className="movieImg">
                <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank">
                    <img 
                        src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/400'} alt="movie.title" 
                        className="rounded-lg object-cover lg:h-[441px] h-[320px]"
                    />
                </a>
                </div>
                <div className="absolute flex items-center px-2 py-1 bg-white rounded-full top-2 left-2 fonm">
                    <img src={yearIcon} alt="icon" className="pr-1" /> <p>{movie.Year}</p>
                </div>
                <div className="absolute top-[92%] left-3 rounded">
                    <h1 className="text-lg font-bold text-white">{movie.Title}</h1>
                </div>
            </div>
        </>
    )
}

export default MovieCard