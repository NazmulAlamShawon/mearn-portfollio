import React from 'react';
import shawon from '../../images/images/shawon.jpg'
import Singlereview from './Singlereview';

const Reviews = () => {
    const reviews =[
        {
                 _id:1,
                 Name:'soheb mahmud',
                 Review:'he is a good expert and promising person i have an amazing jounry with him.His service is high qualatiy best wishes for future',
                 img:shawon,
                },
        {
                 _id:2,
                 Name:'soheb ahmed',
                 Review:'he is a good expert and promising person i have an amazing jounry with him.His service is high qualatiy best wishes for future',
                 img:shawon,
                },
        {
                 _id:3,
                 Name:'soheb khan',
                 Review:'he is a good expert and promising person i have an amazing jounry with him.His service is high qualatiy best wishes for future',
                 img:shawon,
                },
    ]
    return (
        <div>
            <div>
                <h4 className='text-primary  font-bold'>Clint feedback</h4>
                <h2 className='text-primary  font-bold text-3xl'>What's my clint said</h2>
            </div>
            <div>
             {
                 reviews.map(review=><Singlereview
                  key={review._id}
                  review={review}
                 
                 ></Singlereview>)
             }
            </div>
        </div>
    );
};

export default Reviews;