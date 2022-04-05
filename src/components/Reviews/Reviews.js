import React, { useContext } from 'react';
import { ReviewContext } from '../../App';
import Review from './Review/Review';

const Reviews = () => {
    const [reviews] = useContext(ReviewContext);
    return (
        <div>
            <h1 className='text-center text-3xl text-bold mb-5 mt-5'>Customer Reviews (6)</h1>
            <div className='grid grid-cols-3 mt-10 mx-5'>
                {
                    reviews.map(singleReview => <Review
                        key={singleReview.index}
                        singleReview={singleReview}
                    ></Review>)
                }
            </div>
        </div>

    );
};

export default Reviews;