import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './moviePage.css';
import {Spinner} from "reactstrap";


const MoviePage = (props) => {
    const initialState = {
        movie: '',
        loading: false,
    };
    const [movie, setMovie] = useState(initialState);
    const id = props.match.params.id;

    useEffect(()=>{
        const getMovieId = async () => {
            const url  = `http://api.tvmaze.com/shows/${id}`;
            const res = await axios.get(url);

            setMovie(prevState => ({
                ...prevState,
                loading: false,
            }));

            setMovie(prevState => ({
                ...prevState,
                movie: res.data,
                loading: true,
            }));
        };

        getMovieId();
    }, [id]);

    const changeMovieSummery = () => {
        const summery = movie.movie.summary;
        const newSummery = summery.replace(/<p>|<\/p>|<b>|<\/b>|<i>|<\/i>/g , '');
        return newSummery
    };

    return movie.loading ? (
        <div>
            {movie.movie ? <div className="movieBlock">
                {movie.movie.image ?
                    <img className="img"
                         src={movie.movie.image.original}
                         alt="logotip"
                    /> : <div>No images</div>}

                <div className="movieInfo">
                    <h4>Название фильма: {movie.movie.name}</h4>
                    <p><b>День премьеры</b>: {movie.movie.premiered}</p>
                    <p><b>Жанр</b> : {movie.movie.genres}</p>
                    <div>
                        <b>Описание:</b> <br/>
                             {movie.movie.summary ? changeMovieSummery() : <div>Нет описания</div>}
                    </div>
                </div>
            </div> : null}
        </div>
    ) : <div><Spinner color="danger"/></div>;
};

export default MoviePage;