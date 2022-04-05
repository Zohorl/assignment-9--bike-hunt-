import React from 'react';

const Cart = ({ rv }) => {
    const { name, rating, review } = rv;
    return (
        <div className='border-2 mb-3 p-3 rounded bg-green-200'>
            <h2 className='text-2xl'>Name : {name}</h2>
            <h3 className='text-xl'>Review : {review}</h3>
            <h3>Rating : <span className='text-xl text-orange-500'> {rating}</span></h3>
        </div>
    );
};

export default Cart;