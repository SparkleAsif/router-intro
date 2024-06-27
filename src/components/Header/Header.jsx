import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
    <nav className="text-white no-underline mr-3 flex space-x-4 bg-gray-800 p-4">
        <ActiveLink to="/" className="text-white hover:text-gray-400">Home</ActiveLink>
        <ActiveLink to="/friends" className="text-white hover:text-gray-400">Friends</ActiveLink>
        <ActiveLink to="/posts"  className="text-white hover:text-gray-400">Posts</ActiveLink>
        <ActiveLink to="/about" className="text-white hover:text-gray-400">About</ActiveLink>
        <ActiveLink to="/contact" className="text-white hover:text-gray-400">Contact</ActiveLink>
    </nav>
    
    );
};

export default Header;