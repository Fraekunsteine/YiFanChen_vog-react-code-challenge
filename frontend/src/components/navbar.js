import React from 'react';
import { Link } from 'react-router-dom';
import css from './navbar.module.css';

function NavigationBar(props) {
    return(
        <div className={css.Navigation}>
            <Link to='/home'>Home</Link>
            <Link to='/university'>University</Link>
            <Link to='postal-lookup'>Postal Lookup</Link>
        </div>
    );
}

export default NavigationBar;