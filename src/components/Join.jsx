import React from 'react';

import vector from '../assets/images/png/Vector.png'
import Header from './common/Header'
import Input from './common/Input';

const Join = () => {

    return (
        <section className='container max-w-[1320px] bg-white pb-[90px]  mx-auto'>
            <div className='flex flex-wrap justify-center'>
                <div className=' w-full lg:w-1/2 p-6'>
                    <img src={vector} alt="vector" className="w-full h-auto" />
                </div>
                <div className='w-full lg:w-1/2 p-6'>
                    <svg width="189" height="8" viewBox="0 0 189 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" width="188" height="8" fill="#01C8FF" />
                        <rect width="166" height="8" fill="#2C49FE" />
                    </svg>
                    <div className='text-black  text-[48px] leading-[130%]  font-poppin'>
                        <Header title="Join Us !" /></div>
                    <p className=' max-w-[543px] font-normal text-[16px] leading-[100%] text-[#000000B2] mt-[5px] mb-[15px] font-poppin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue </p>
                    <h3 className='font-bold  text-[35px] leading-[130%] text-black font-poppin' >Sign Up</h3>
                    <Input/>
                   
                </div>
            </div>

        </section>
    )
}

export default Join


