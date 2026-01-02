import React from 'react';
import AppError from '../../image/App-Error.png'
import { Link } from 'react-router';

const ErrorPage = () => {
 

  return (
    <div className="text-center mt-20">
        <img src={AppError} className='mx-auto' alt="" />
      <h1 className="text-4xl font-bold text-black mt-4">OPPS!! APP NOT FOUND</h1>
      <p className="mt-4 text-xl text-gray-500">
        The App you are requesting is not found on our system.  please try another apps
      </p>
      <Link to='/AllApps'><button className='text-[8px] md:text-[16px] btn text-white p-3 px-4 gap-2 bg-linear-to-bl from-violet-500 to-fuchsia-500 w-[95px] md:w-[145px] h-[43px]  mr-[80px] mt-4'> Go Back</button>
</Link>
    </div>
  );
};

export default ErrorPage;
