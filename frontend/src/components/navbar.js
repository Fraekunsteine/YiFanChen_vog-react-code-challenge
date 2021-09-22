import React from 'react';
import { Link } from 'react-router-dom';
import anon from '../anon.png'
import css from './navbar.module.css';

function NavigationBar(props) {
    return(
        <div className={css.Navigation}>
            <div className={css.Profile}>
                <img src={anon} alt='anon' width='50px' height='50px'/>
                <h4>User7</h4>
            </div>
            <Link to='/home'>Home</Link>
            <Link to='/university'>University</Link>
            <Link to='postal-lookup'>Postal Lookup</Link>                     
        </div>
    );
}

export default NavigationBar;