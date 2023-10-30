import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCrad from './ServiceCrad';

const Services = () => {

  const [services, setservices] = useState([]);
  const [loader, setloader] = useState(false)

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())


      .then(data => setservices(data))

      
  }, [])




  return (
    <div>
      <div className='text-center space-y-3 text-white'>
        <h3 className='text-4xl font-bold '>Our Service Area</h3>
        <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.</p>
      </div>
      <div className='my-10 grid gap-5  lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        {
          services.map((service, index) => <ServiceCrad serviceCard={service} key={index}></ServiceCrad>)

        }

      </div>

    </div>
  );
};

export default Services;