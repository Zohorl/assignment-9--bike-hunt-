import React from 'react';

const Home = () => {
    return (
        <div className='mt-10 mx-12'>
            <div className='flex'>
                <img className='w-1/2' src={require('../Images/./harley-davidson.jpg')} alt="" />
                <div className='ml-12'>
                    <h2 className='font-extrabold text-6xl'>Your Dream Bike</h2>
                    <h2 className='text-blue-700 font-extrabold text-6xl my-5'>Harley Davidson Sportster® S</h2>
                    <p className='text-2xl'>Sportster® S is the first chapter of a whole new book of the Sportster saga. A legacy born in 1957 that outperformed the competition is now rebuilt to blow away the standards of today.</p>
                    <button className='text-3xl bg-blue-100 text-blue-700 mt-8 ml-8 p-3 rounded'>Live demo</button>
                </div>
            </div>
        </div>
    );
};

export default Home;