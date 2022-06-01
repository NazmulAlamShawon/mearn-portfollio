import React from 'react';
import './info.css'


const InfoCard = ({ img, cardTitle, cardDes }) => {
    return (
        <div>

            <div class="card lg:card-side bg-base-100 bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-white">

                <figure><img src={img} alt="Album" className='imgset' /></figure>
                <div class="card-body">
                    <h2 class="card-title">{cardTitle}</h2>
                    <p>{cardDes}</p>

                </div>
            </div>
        </div>
    );
};

export default InfoCard;