import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className=
    'block  bg-gray-800 text-white  p-4'>
        <div className="container flex flex-wrap items-center">
        Sarthaks Blog
            <ul>
                <li>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                </li>
            
            </ul>
        
        </div>
    </div>
  )
}
