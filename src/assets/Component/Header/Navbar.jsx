import React from 'react';
import navImg from '../../image/logo.png'
import logoButton from '../../image/Vector.png'
import { Link } from 'react-router';


const Navbar = () => {
    
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <Link to='/'><li>Home</li></Link>
        <Link to='AllApps'><li>Apps</li></Link>
        <Link to='Installation'><li>Installation</li></Link>
       
      </ul>
    </div>
    <img src={navImg} className='w-[40px ml-[40px] h-[40px]' alt="" />
    <a className="btn btn-ghost text-xl bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Hero.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5">
      <Link to='/'><li>Home</li></Link>
      <Link to='AllApps'><li>Apps</li></Link>
      <Link to='Installation'><li>Installation</li></Link>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to=''><div className='hidden md:block'><button className=' text-[16px] btn text-white p-3 px-4 gap-2 bg-linear-to-bl from-violet-500 to-fuchsia-500 w-[145px] h-[43px]  mr-[80px]'>     <img src={logoButton} className='w-5 h-5' alt="" />
   Contribute</button></div></Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;