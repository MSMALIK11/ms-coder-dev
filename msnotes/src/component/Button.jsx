import React from 'react';
import './styles/button/button.scss';
import {Link} from 'react-router-dom';

const Button = ({icon,path}) => {
    return (
        <div>
            <Link to={path}>
            <button className={`custom-btn`}>
            <i className={icon}></i>
            </button>
            </Link>
        </div>
    )
}

export default Button
