import React from 'react';
import propTypes from 'prop-types';
import "./Movie.css";

// state를 사용하지 않는 컴포넌트라면 굳이 Class Component를 사용하지 않아도 됌
// 그래서 function component 사용

function Movie({ id, year, title, summary, poster, genres }) {
    return <div className='movie'>
        <img src={poster} alt={title} title={title} />
        <div className='movie__data'>
            <h3 className='movie__title'>{title}</h3>
            <h5 className='movie__year'>{year}</h5>
            <ul className='movie__genres'>
                {genres.map((genres, index) => (
                    <li key={index} className='genres_genre'>{genres}</li>
                ))}
            </ul>
            <p className='movie__summary'>{summary.slice(0, 180)}...</p>
        </div>
    </div>
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;