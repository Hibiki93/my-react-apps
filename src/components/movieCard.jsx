import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie w-1/4 mb-3 px-3" key={imdbID}>
      <div className="max-w-sm w-full rounded overflow-hidden shadow-lg h-full">
        <div className='w-full text-center px-6 pt-3 pb-3'>
          <p>{Year}</p>
        </div>

        <div className="relative pb-2/3">
          <img className="absolute w-full h-full object-cover" src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
        </div>

        <div className="px-6 pt-4 pb-2">
          <span className="text-gray-700 text-base">{Type}</span>
          <h3 className='font-bold text-xl mb-2'>{Title}</h3>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;