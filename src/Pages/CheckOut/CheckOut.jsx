import React, { useContext } from 'react';
import imgg from '../../../assets/images/checkout/checkout.png'
import { useLoaderData } from 'react-router-dom';
import { data } from 'autoprefixer';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Auntication/Authentication';


const CheckOut = () => {

  const { user } = useContext(AuthContext);

  const loader = useLoaderData();

  const { title, price, img, service_id } = loader;


  const handlesubmit = e => {
    e.preventDefault();
    const form = e.target;
    const fullname = form.fullname.value;
    const date = form.date.value
    const email = user?.email
    const due = form.due.value
    const message = form.message.value
    const frominfo = {

      fullname,
      date,
      email,
      due,
      message,
      img,
      service_id
    };

    console.log(frominfo);

    
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        "content-type": "application/json"

      },
      body: JSON.stringify(frominfo)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          toast.success('Successfully toasted!')
          form.reset()
        }
      })

  }


  return (
    <div className='container mx-auto'>

      <div className='flex justify-center'>
        <img className='w-full' src={imgg} alt="" />
      </div>

      <div className='bg-gray-300 my-20 rounded-xl'>

        <form onSubmit={handlesubmit} className="card-body p-20">

          <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
            <div className="form-control">

              <input type="text" defaultValue={user?.displayName} placeholder="Full Name" className="input input-bordered" name='fullname' required />
            </div>

            <div className="form-control">

              <input type="date" name='date' className="input input-bordered" required />

            </div>

            <div className="form-control">

              <input type="email" defaultValue={user?.email} name='email' placeholder="Your Email" className="input input-bordered" required />

            </div>



            <div className="form-control">

              <input type="text" name='due' defaultValue={'$' + price} placeholder="Due Amout" className="input input-bordered" required />

            </div>


          </div>

          <div className='mt-5'>
            <textarea placeholder='Your Message' className='w-full' name="message" id="" cols="300" rows="10"></textarea>
          </div>
          <div className="form-control mt-6">

            <input className='btn bg-red-700 text-white hover:bg-blue-600' type="submit" value="Order Confirm" />
          </div>
        </form>


      </div>

    </div>
  );
};

export default CheckOut;