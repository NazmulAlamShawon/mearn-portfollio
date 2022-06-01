import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../images/icon/clock.png'
import marker from '../../../images/icon/marker.png'
import phone from '../../../images/icon/phone.png'
import './info.css'
const Info = () => {
    return (

        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-3 p-5 '>
            <InfoCard  cardDes="We provide 24 hourse service it is alltime open for all clint " cardTitle="24 hours service" img={clock} className='imgset bg-gradient-to-r from-cyan-500 to-blue-500' ></InfoCard>
            <InfoCard cardDes="9.sahid engneer nurul haque road,kushtia ,dhaka,Bangladesh" cardTitle="My loction" img={marker} className='imgset bg-gradient-to-r from-cyan-500 to-blue-500' ></InfoCard>
            <InfoCard cardDes="Mobile:01316077208 e-mail:shawonkst17@gmail.com " cardTitle="Contact me" img={phone} className='imgset bg-gradient-to-r from-cyan-500 to-blue-500' ></InfoCard>
        </div>
    );
};

export default Info;