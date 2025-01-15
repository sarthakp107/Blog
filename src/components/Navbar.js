import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='bg-dark text-light p-2 text-lg '>
            <ul className='flex justify-around'>
                <li className=''>
                    <Link to="/">Sarthaks Blog</Link>
                </li>
<div>
    
</div>
                <li>
                    <Link to="/login" className='mr-2'>Login</Link>
                    <Link to="/signup" className='mr-20'>Signup</Link>
                    <Link to="/subscribe" className=' bg-gray-400 rounded-full py-1.5 px-3 hover:bg-gray-50'>Subscribe</Link>
                </li>
                

            </ul>
        </div>
    )
}
