import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
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
                <button>
                    <li>
                        <NavLink
                            to={"/login"}
                            className={({ isActive, isPending }) => {
                                isPending ? 'pending' : isActive ? 'underline' : ''
                            }}

                        >
                            Login
                        </NavLink>
                    </li>
                </button>
            </div>
        </div>
    )
}

export default Navbar
