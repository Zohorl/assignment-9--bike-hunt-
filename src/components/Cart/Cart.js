import React from 'react';

const Cart = ({ rv }) => {
    const { name, rating, review } = rv;
    return (
        <div className='border-2 mb-3 p-3'>
            <h2>Name : {name}</h2>
            <h3>Review : {review}</h3>
            <h3>Rating : {rating}</h3>
        </div>
    );
};

export default Cart;