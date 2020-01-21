import React from 'react';
import './autoComplete.css';
import {NavLink} from "react-router-dom";

const Autocomplete = (props) => {
    return (
        <div className="autoCompleteBlock" hidden={props.hidden} >
                {Object.keys(props.autoComplete).map(key =>
                    <p onClick={props.onClickOff} key={key}>
                        <NavLink  to={`/movie/${props.autoComplete[key].show.id}`}>
                                {props.autoComplete[key].show.name}
                        </NavLink>
                    </p>)}
        </div>
    );
};
export default Autocomplete;