import React from 'react';
import Baner from '../../Components/Banner/Baner';
import Info from '../../Components/Banner/info/Info';
import Myservices from '../../Components/Banner/Services/Myservices';
import MakeSchedule from '../../Components/MakeSchedule';
import States from '../../Components/States';

const Home = () => {
    return (
        <div className='px-5 mb-5'>
            <Baner></Baner>
            <Info></Info>
            <Myservices></Myservices>
            <MakeSchedule></MakeSchedule>
            <States></States>
        </div>
    );
};

export default Home;