import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { FaShoppingCart } from "react-icons/fa";
import Swal from 'sweetalert2'
import useCart from '../../../hooks/useCart';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [cart] = useCart();

    const { user, logout } = useAuth()
    const handlelogout = () => {
        logout()
            .then(res => {

                Swal.fire({
                    warning: "success",
                    title: 'Logout Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(location.state ? location.state : "/")
            })
            .catch(error => console.log(error))
    }


    const Navlinks = <>



        <li className=' font-semibold'>
            <NavLink
                to={'/'}
                className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'underline' : ''
                }
            >
                Home
            </NavLink>
        </li>

        <li className=' font-semibold'>
            <NavLink
                to={'/ourmenu'}
                className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'underline' : ''
                }
            >
                Our Menu
            </NavLink>
        </li>
        <li className=' font-semibold'>
            <NavLink
                to={'/order/category'}
                className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'underline' : ''
                }
            >
                Order
            </NavLink>
        </li>
        <li className=' font-semibold'>
            <NavLink
                to={'/signup'}
                className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'underline' : ''
                }
            >
                SignUp
            </NavLink>
        </li>

    </>
    return (
        <div className="navbar fixed z-10 text-white bg-slate-500 font-bold bg-opacity-20  max-w-screen-xl ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {Navlinks}

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {Navlinks}

                </ul>
            </div>
            <div className="navbar-end">


                {user ? <>
                    <button className="btn">
                        <FaShoppingCart className='m-2' />
                        <div className="badge badge-secondary">+{cart.length}</div>
                    </button>



                    <button onClick={handlelogout} className='btn btn-ghost hover:bg-red-500'
                    >Logout</button>

                </>
                    :
                    <>
                        <button className='btn bg-gray-50 p-4 text-black hover:bg-green-400'>
                            <NavLink
                                to={"/login"}
                                className={({ isActive, isPending }) => {
                                    isPending ? 'pending' : isActive ? 'underline' : ''
                                }}

                            >
                                Login
                            </NavLink>
                        </button>
                    </>
                }

            </div>

        </div>
    )
}

export default Navbar
