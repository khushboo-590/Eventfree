import React from 'react';
import Navbar from './common/Navbar';
import Header from './common/Header';
import bigLine from '../assets/images/png/big-line.png'
import location from '../assets/images/png/location.png'
import mobile from '../assets/images/png/moblie.png'
import contact from '../assets/images/png/contact.png'





const Hero = () => {
  return (
    <section
      className='min-h-[986px] bg-cover bg-center flex flex-col relative w-full bg-[url(./assets/images/png/hero-img.png)]'
    >
      <div className="absolute inset-0 bg-[#00000091] " />
      <div className="relative z-10 w-full">
        <div className='container max-w-[1320px] mx-auto p-2'>
          <Navbar />
          <div className="mt-[173px] text-white max-w-[1044px] text-[38px] sm:text-[48px] md:text-[64px] leading-[120%] sm:leading-[130%] md:leading-[150%] font-poppin">
            <Header
              title="Sed tortor in quisque morbi" />
            <img src={bigLine} alt="line" className='ml-100 hidden lg:block'></img>

            <Header title="scelerisque etiam eu."
            />
          </div>
          <p className='font-normal text-[20px] leading-[100%] text-[#FFFFFF] max-w-[765px] mt-[18px] ff-yantramanav '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,</p>
          <div className=' flex gap-[23px] items-center mt-[33px] mb-[145px]'>
            <button className=' bg-[#2C49FE] rounded-[28px] py-3 px-5 mt-[24px] text-white hover:bg-white hover:text-[#2C49FE] font-poppin'>Get Started</button>
            <a href="/" className=' font-normal text-[20px] leading-[-150%] text-white pt-5 font-poppin'>Learn more</a>
          </div>
          <div class="flex flex-wrap items-center mb-5 py-4 relative bg-[#2C49FEBD] max-w-[962px]
            rounded-[10px] sm:rounded-[10px] md:rounded-[30px] lg:rounded-[150px]">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-2 px-4 border-0 lg:border-r lg:border-white">
              <div className="flex items-center justify-center space-x-4 pb-3">
                <img src={location} alt="location" className="size-8" />
                <div>
                  <p className="text-white text-lg font-medium leading-6">Location</p>
                  <p className="text-blue-200 text-sm">Search by city</p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-2 px-4 border-0 lg:border-r lg:border-white">
              <div className="flex items-center justify-center space-x-4 pb-3">
                <img src={mobile} alt="date" className="size-6" />
                <div>
                  <p className="text-white text-lg font-medium leading-6">Date</p>
                  <p className="text-blue-200 text-sm">09/23/2021</p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-2 px-4 border-0 lg:border-r lg:border-white">
              <div className="flex items-center justify-center space-x-4 pb-3">
                <img src={contact} alt="capacity" className="size-8" />
                <div>
                  <p className="text-white text-lg font-medium leading-6">Capacity</p>
                  <p className="text-blue-200 text-sm">Search by city</p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-2 px-4 flex justify-center lg:justify-end">
              <button className='bg-white text-[#2C49FE] font-bold  text-[20px]  leading-[100%] px-6 py-5 rounded-full hover: hover:text-blue-300 font-poppin' >GO CHECK</button>
            </div>          
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;


