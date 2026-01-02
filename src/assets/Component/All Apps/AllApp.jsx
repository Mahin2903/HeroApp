import React from 'react';
import { Link } from 'react-router';
import { PiDownloadSimple } from "react-icons/pi";
import { FaStar } from "react-icons/fa";

const AllApp = ({App, singleApp}) => {

    const appData = App || singleApp;
if (!appData) return null;
const {companyName, downloads, image, ratingAvg, id} = appData;
const convertTedNumber = (downloads) => {

  return Math.abs(Number(downloads)) >= 1.0e+9
    ? (Math.abs(Number(downloads)) / 1.0e+9).toFixed(2) + "B"
    : Math.abs(Number(downloads)) >= 1.0e+6
    ? (Math.abs(Number(downloads)) / 1.0e+6).toFixed(2) + "M"
    : Math.abs(Number(downloads)) >= 1.0e+3
    ? (Math.abs(Number(downloads)) / 1.0e+3).toFixed(2) + "K"
    : Math.abs(Number(downloads));
};
    
    return (
        <Link  to={`/appDetails/${id}`}><div className=''>
            <div className="card bg-base-100 w-[318px] h-[435px] mx-auto mt-4 shadow-sm">
  <figure>
    <img
    src={image}
    className='w-[305px] h-[305px]'
      alt="App Logo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {companyName}
    </h2>
    <div className="flex justify-between gap-[193px]">
                  <p className="flex items-center gap-1 text-[#00d390]">
                    <PiDownloadSimple /> {ratingAvg}
                  </p>
                  <p className="flex items-center gap-1 text-[#ff8811]">
                    <FaStar /> {convertTedNumber(downloads)}
                  </p>      

                      </div>
  </div>
</div>
        </div></Link>
       
    );
};

export default AllApp;