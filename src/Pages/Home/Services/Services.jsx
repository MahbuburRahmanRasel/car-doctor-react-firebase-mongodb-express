import React from 'react';
import services from '../../../../public/car-doctor-resources/services.json'
import Service from './Service';

const Services = () => {

    

    return (
        <div >
            <div className='text-center space-y-5 w-2/3 mx-auto'>
            <h3 className='text-xl font-bold text-primary'>Services</h3>
            <h1 className='text-5xl font-bold'>Our Services </h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

           <div className='grid grid-cols-3 gap-10 mt-10'>
             
           {
                services.map(service =>(
                    <Service
                    key= {service._id}
                    service = {service}
                    />
                ))
            }
           </div>
            
        </div>
    );
};

export default Services;