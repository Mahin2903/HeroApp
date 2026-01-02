import React from 'react';
import ErrorPageNot from '../../image/error-404.png'
import { Link } from 'react-router';

const ErrorPageNotFound = () => {
    return (
        <div>
            <img src={ErrorPageNot} className='mx-auto my-auto flex items-center max-w-[500px] max-h-[500px] mt-[80px]' alt="" />
            <h1 className="text-[48px] font-semibold text-black mt-8 text-center">Oops, page not found!</h1>
      <p className="mt-4 text-xl text-gray-500 text-center">The page you are looking for is not available.</p>
      
      <Link to='/'><button className='btn ml-[170px] md:ml-[660px] bg-linear-to-bl from-violet-500 text-white mt-10 to-fuchsia-500 justify-center'>Go back</button></Link>
        </div>
    );
};

export default ErrorPageNotFound;