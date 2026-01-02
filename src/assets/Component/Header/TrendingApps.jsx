import React, { useEffect, useState } from 'react';

import AllApp from '../All Apps/AllApp';
import { Link } from 'react-router';

const TrendingApps = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/App.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-4 '>
      {data.length === 0 ? (
        <span>Loading...</span>
      ) : (
        data.slice(0, 8).map(singleApp => (
          <AllApp singleApp={singleApp}></AllApp>
        ))
      )}
    </div>
       <div className='flex justify-center mt-10'>
                <Link to='AllApps'><button className='text-[16px] btn text-white p-3 px-4 gap-2 bg-linear-to-bl from-violet-500 to-fuchsia-500 w-[145px] h-[43px]  mr-[80px]'>Show All</button></Link>
       </div>
    </div>
  );
};

export default TrendingApps;
