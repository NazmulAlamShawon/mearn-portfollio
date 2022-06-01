import React from 'react';
import uiux from '../../../images/icon/ui-ux.png'
import design from '../../../images/icon/web-design.png'
import dev from '../../../images/icon/dev.png'
import Service from './Service';

const Myservices = () => {
    const myServices =[
        {
            _id:1,
            Name: 'Ui and Ux design',
            Description:' ui and ux services  i can design prototype  ui and ux design',
            img:uiux
        },
        {
            _id:2,
            Name: 'Web design service',
            Description:' i can provide you web design service',
            img:design
        },
        {
            _id:3,
            Name: 'Web development service',
            Description:' I also give you web development service for your company',
            img:dev
        },
    
    ]
   
    return (
        <div className='my-40'>
            <div className='text-center'>
                 <h3 className='text-primary text-xl font-bold uppercase'> My services</h3>
                 <h2 className='text-3xl'> services I  provide provide</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  mt-10 p-4'>
                {
                    myServices.map(myservice=><Service
                       key={Service._id}
                       myservice={myservice}
                    
                    ></Service>)
                }
            </div>
        </div>
                          
    );
 

};

export default Myservices;