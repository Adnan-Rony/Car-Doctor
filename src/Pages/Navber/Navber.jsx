import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/icons/logo.svg'
import auth from '../../Firebase/Firebase.config';
import { AuthContext } from '../../Auntication/Authentication';


const Navber = () => {

    const { user, logout } = useContext(AuthContext)


    const handlelogout = () => {
        logout(auth)
            .then()
            .catch(error => console.log(error))

    }


    const navItems = <>

        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 text-xl font-bold " : ""
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-700 text-xl font-bold " : ""
            }
        >
            About
        </NavLink>



        {
            user?.email ?
                <>
                <NavLink
                        to="/bookings"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-700 text-xl font-bold " : ""
                        }
                    >
                        Bookings
                    </NavLink>
                    
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-700 text-xl font-bold " : ""
                        }
                    >
                        <button onClick={handlelogout}>Log out</button>
                    </NavLink>

                    


                </>
                :
                <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-700 text-xl font-bold " : ""
                    }
                >
                    Login
                </NavLink>
        }



    </>
    return (
        <div className="navbar bg-base-100 h-12 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className='w-12' src={logo} alt="" />
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl gap-3">
                    {navItems}
                </ul>
            </div>




            <div className="navbar-end">
                <div>

                </div>
                <button className="btn btn-outline btn-">Appointment</button>
            </div>
        </div>
    );
};


export default Navber;