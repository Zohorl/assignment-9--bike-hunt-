import React from 'react';

const Review = ({ singleReview }) => {
    const { name, review, rating } = singleReview;
    return (
        <div className='border-2 m-3 p-3 rounded bg-green-200 drop-shadow-xl'>
            <h2 className='text-2xl'>Name : {name}</h2>
            <h4 className='text-xl'>Review : {review}</h4>
            <h4>Rating : <span className='text-xl text-orange-500'> {rating}</span></h4>
        </div>
    );
};

export default Review;