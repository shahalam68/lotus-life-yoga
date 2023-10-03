import React from 'react';
import logo from '/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div>
                    <img className='w-20' src={logo} alt="" />
                </div>
                <div className='md:flex md:items-center md: ml-60 '>
                    <Link className=' text-lg' to='/'>Home</Link>
                    <Link className='md: ml-10 text-lg' to='/'>About</Link>
                    <Link className='md: ml-10 text-lg' to='/'>Contact</Link>
                    <div className="py-6 md: ml-10 text-lg ">
                        <button className='bg-pink-200 rounded  px-5'>
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base  leading-7 ">Log in</a>
                        </button>
                    </div>
                    <div className=" md: ml-10 text-lg ">
                        <button className='bg-pink-200 rounded  px-5'>
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base  leading-7 ">Sign in</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;