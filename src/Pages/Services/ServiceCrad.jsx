import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCrad = ({ serviceCard }) => {

    const {_id,service_id,title,img,price,description,facility}=serviceCard
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='h-[256px]' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-2xl font-bold'>price:{price}</p>
                    <div className="card-actions justify-end">
                       <Link to={`checkout/${_id}`}>
                       <button className="btn btn-primary">Book Now</button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCrad;
