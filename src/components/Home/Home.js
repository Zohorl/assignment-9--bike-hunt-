import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReviewContext } from '../../App';
import Cart from '../Cart/Cart';

const Home = () => {
    const [reviews] = useContext(ReviewContext)
    const navigate = useNavigate();

    return (
        <div className='mt-10 mx-12'>
            <div className='flex'>
                <img className='w-1/2' src={require('../Images/./harley-davidson.jpg')} alt="" />
                <div className='ml-12'>
                    <h2 className='font-extrabold text-6xl'>Your Dream Bike</h2>
                    <h2 className='text-blue-700 font-extrabold text-6xl my-5'>Harley Davidson Sportster® S</h2>
                    <p className='text-2xl'>Sportster® S is the first chapter of a whole new book of the Sportster saga. A legacy born in 1957 that outperformed the competition is now rebuilt to blow away the standards of today.</p>
                    <button className='text-2xl bg-blue-100 text-blue-700 mt-8 ml-8 px-3 py-2 rounded'>Live demo</button>
                </div>
            </div>
            <div className='grid grid-cols-1 mt-20 mb-10'>
                <h1 className='text-center text-3xl text-bold mb-5'>Customer Reviews(3)</h1>
                {
                    reviews.slice(0, 3).map(rv => <Cart
                        key={rv.index}
                        rv={rv}
                    ></Cart>)
                }
                <button className='bg-blue-100 w-44 mx-auto text-xl font-bold text-blue-700 px-3 py-1 rounded-lg' onClick={() => navigate('/reviews')}>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;