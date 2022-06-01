import React from 'react';

const Service = ({myservice}) => {
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={myservice.img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{myservice.Name}</h2>
                <p>{myservice.Description}</p>
              
            </div>
        </div>
    );
};

export default Service;