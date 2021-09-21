import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className = 'home'>
            <Link className = 'home-link' to= '/nasaphoto'>
                <p>Click to see</p>
                <p>Where E.T. lives</p>
            </Link>
        </div>
    );
}