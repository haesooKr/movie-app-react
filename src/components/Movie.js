import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Movie({year, title, summary, poster, genres}) {
    return (
        <Link to={{
            pathname:'/movie-detail',
            state:{
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="genres">
                    {genres.map((genre, index) => (
                    <li key={index} className="genres_genre">{genre}</li>
                    ))}
                </ul>
                <p className="movie_summary">{summary.slice(0, 180)}...</p>
            </div>
        </div>
        </Link>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}