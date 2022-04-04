import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './NavBar.css';
const NavBar = () => {
    return (
        <div>
            <h1 className='text-center text-3xl'>Welcome to Bikes Hunt !!!</h1>
            <nav className='flex justify-center'>
                <CustomLink className='mr-5 text-xl' to='/home'>HOME</CustomLink>
                <CustomLink className='mr-5 text-xl' to='/reviews'>REVIEWS</CustomLink>
                <CustomLink className='mr-5 text-xl' to='/dashboard'>DASHBOAED</CustomLink>
                <CustomLink className='mr-5 text-xl' to='/blogs'>BLOGS</CustomLink>
                <CustomLink className='mr-5 text-xl' to='/about'>ABOUT</CustomLink>
            </nav>
        </div>
    );
};

export default NavBar;