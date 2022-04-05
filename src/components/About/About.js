import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='mt-16 text-center'>
            <p className='text-4xl mb-3'>If you want to know more about us !!!</p>
            <Link className='text-3xl bg-blue-400 hover:bg-orange-600 px-3 rounded-lg' to='https://www.harley-davidson.com/us/en/motorcycles/cruiser.html'>Click Here</Link>
        </div>
    );
};

export default About;