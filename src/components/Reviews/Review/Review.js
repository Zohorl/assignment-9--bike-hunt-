import React from 'react';

const Review = ({ singleReview }) => {
    const { name, review, rating } = singleReview;
    return (
        <div className='border-2 m-3 p-3 rounded'>
            <h2>Name : {name}</h2>
            <h4>Review : {review}</h4>
            <h4>Rating : {rating}</h4>
        </div>
    );
};

export default Review;