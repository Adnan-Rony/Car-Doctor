import React from 'react';

const BookingsRaw = ({bookings}) => {


    const {fullname,date,email,message,service_id,due,img}=bookings





    return (
        <tr>
        <th>
            <label>
                <input type="checkbox" className="checkbox" />
            </label>
        </th>
        <td>
           
                <div className="avatar">
                    <div className="rounded w-24">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
               
          
        </td>
        <td>
          {
                fullname
          }
        </td>
        <td>{email}</td>
        <td>{due}</td>
        <th>
            <button className="btn btn-ghost btn-xs">details</button>
        </th>
    </tr>
    );
};

export default BookingsRaw;