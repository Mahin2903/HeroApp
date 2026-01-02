import React from 'react';
import appStore from '../../image/app-store.png'
import PlayStore from '../../image/app.png'
import heroImg from '../../image/hero.png'
import { Link } from 'react-router';
import AllApps from '../All Apps/AllApps';

const Header = () => {
    return (
        <div>
            <h1 className='text-center mt-[80px] text-[52px] md:text-[72px] font-bold'>We Build <br /> <span className='bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent'>Productive</span> Apps</h1>
            <p className='text-lg md:text-xl text-gray-400 font-normal text-center'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center gap-3 m-10'>
            <Link to=''><button onClick={() => window.open("https://play.google.com/store/games?hl=en", "_blank")} className='text-[16px] btn p-3 px-4 text-center gap-2'><img src={PlayStore} className='w-5 h-5' alt="" />
                Play Store</button></Link>
            <Link to=''><button onClick={() => window.open("https://www.apple.com/app-store/", "_blank")} className='text-[16px] btn p-3 px-4 text-center gap-2'><img src={appStore} className='w-5 h-5' alt="" />
                App Store</button></Link>
            </div>
            <img src={heroImg} className='mt-[40px] mx-auto' alt="" />
            <div className='p-[80px] bg-linear-to-l from-fuchsia-700 to-violet-600 mb-[80px]'>
                <h1 className='text-white text-[48px] text-center font-bold'>Trusted by Millions, Built For You</h1>
                <div className='flex flex-wrap justify-center gap-[175px]'>
                    <div className='text-center mt-[40px]'>
                    <p className='text-lg text-white'>Total Downloads</p>
                    <h2 className='text-[64px] text-white font-bold'>29.6M</h2>
                    <p className='text-lg text-white'>21% More Than Last Month</p>
                </div>
                <div className='text-center mt-[40px]'>
                    <p className='text-lg text-white'>Total Reviews</p>
                    <h2 className='text-[64px] text-white font-bold'>906K</h2>
                    <p className='text-lg text-white'>46% More Than Last Month</p>
                </div>
                <div className='text-center mt-[40px]'>
                    <p className='text-lg text-white'>Active Apps</p>
                    <h2 className='text-[64px] text-white font-bold'>132+</h2>
                    <p className='text-lg text-white'>31 More Will Launch</p>
                </div>
                </div>
            </div>   
            <h1 className='text-[48px] font-bold text-center'>Trending Apps</h1>
            <p className='text-[20px] text-gray-500 text-center mb-10'>Explore All Trending Apps on the Market developed by us</p>
            
        </div>
    );
};

export default Header;