import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>My Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;