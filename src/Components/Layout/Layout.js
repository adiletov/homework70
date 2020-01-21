import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import './layout.css';
import axios from 'axios';
import Autocomplete from "../Autocomplete/Autocomplete";


const Layout =  (props) => {
    const initialState = {
        autocomplete: '',
    };
    const [hidden, setHidden] =useState(false);
    const [movies, setMovie] = useState((initialState));
    const url = 'http://api.tvmaze.com/search/shows?q=';
    const getValueInput = async(e) => {
       let movie = e.target.value;

       const res = await axios.get(url + movie);
        setMovie(prevState => ({
            ...prevState,
            autocomplete :res.data,
        }));
    };

    const changerHidden = () => {
       setHidden(true)
    };
    const changerHiddenOff = () => {
        setHidden(false)
    };
    return (
        <div>
            <Header/>
            <div className="searchMovieBlock" onClick={changerHidden}>
                    <label>
                        Search for movies  :
                        <input value={movies.autoComplete}  onChange={(event)=>getValueInput(event)} placeholder="Поиск фильма"  className="searchInput" type="text"/>
                    </label>
            </div>
            {hidden &&
            <Autocomplete
                hidden={movies.hidden}
                onClickOff={()=>changerHiddenOff()}
                autoComplete={movies.autocomplete}
            />
            }
            {props.children}
        </div>
    );
};

export default Layout;