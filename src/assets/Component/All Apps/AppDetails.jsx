import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import DownloadsIcon from '../../image/icon-downloads.png'
import ratingIcon from '../../image/icon-ratings.png'
import reviewIcon from '../../image/icon-review.png'
import ErrorPage from '../Error/ErrorPage';
import { addToStoredDB, getStoredApp } from '../Utility/Utility';




const AppDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const Appid = parseInt(id);
    const singleApp = data.find(App => App.id === Appid);
    const storedApps = getStoredApp();
     const isInstalled = !!storedApps[id];


   


    const handleAppInstallation = () =>{
        addToStoredDB(id);
        window.location.reload();
    }
    
    if(!singleApp){
        return <ErrorPage></ErrorPage>
    }
    const {companyName, downloads,size, image, ratingAvg, ratings, reviews, description} = singleApp;
    
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
        <div className="max-w-6xl mx-auto p-6 space-y-10">

      
      <div className="flex gap-6 items-center flex-wrap">
        <div className="w-[350px] h-[360px] mr-10 rounded-xl flex items-center justify-center shadow-md p-3">
          <img
            src={image}
            alt="App Icon"
            className="w-[350px] h-[350px]"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold">{companyName}</h1>
          <p className="text-gray-500 ">
            Developed by <span className="text-blue-600 font-medium">productive.io</span>
          </p>
          <p className='border-b-1 border-gray-200 mt-7'></p>

          <div className="flex gap-10 mt-4 ">
            <div className=''>
                <img src={DownloadsIcon} alt="" />
                <p className='text-gray-500'>Downloads</p>
                <p className='mt-1 text-[40px] font-bold'>{convertTedNumber(downloads)}</p>
            </div>
            <div>
               <img src={ratingIcon} alt="" />
               <p className='text-gray-500 '>Ratings</p>
                <p className='mt-1 text-[40px] font-bold'>{ratingAvg}</p>
                </div>
            <div>
                <img src={reviewIcon} alt="" />
                <p className='text-gray-500'>Reviews</p>
                <p className='mt-1 text-[40px] font-bold'>{convertTedNumber(reviews)}</p>
                </div>
            
            
            
            
          </div>

          <button
  onClick={handleAppInstallation}
  disabled={isInstalled}
  className={`btn mt-[70px] text-white
    ${isInstalled ? 'btn-disabled bg-gray-400 cursor-not-allowed' : 'btn-success'}`}
>
  {isInstalled ? 'Installed' : `Install Now (${size})`}
</button>


          
        </div>
        
      </div>
      <p className='border-b-1 border-gray-200 mt-7'></p>

     
      <h2 className='font-semibold text-2xl'>Ratings</h2>
      <div className="w-full h-[300px]">
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={ratings} layout="vertical">
      
      <XAxis type="number" />

      
      <YAxis
        dataKey="name"
        type="category"
        width={80}
        reversed
      />

      <Bar dataKey="count" fill="#ff8811" />
    </BarChart>
  </ResponsiveContainer>
</div>
      
      <div className="space-y-5">
        <h2 className="text-xl font-bold">Description</h2>

        <p>{description}</p>
      </div>
    </div>
    );
};

export default AppDetails;