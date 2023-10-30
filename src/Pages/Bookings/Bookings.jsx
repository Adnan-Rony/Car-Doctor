import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Auntication/Authentication';
import imgg from '../../../assets/images/checkout/checkout.png'
import BookingsRaw from './BookingsRaw';



const Bookings = () => {

    const { user} = useContext(AuthContext)

    const [booking, setbookings] = useState([])

    const url=`http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setbookings(data))

    },[])
 

    return (
        <div>
            <div>
                <img className='container mx-auto' src={imgg} alt="" />
            </div>





            <div className='my-20 text-white'>
                <div className="overflow-x-auto">
                    <table className="table text-white">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th className='text-white'>Image</th>
                                <th className='text-white'>Name</th>
                                <th className='text-white'>gmail</th>
                                <th className='text-white'>price</th>
                                <th className='text-white'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                booking.map((book,index)=><BookingsRaw key={index} bookings={book}></BookingsRaw>)
                            }
                         
                         
                         
                          
                        </tbody>
                       

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Bookings;