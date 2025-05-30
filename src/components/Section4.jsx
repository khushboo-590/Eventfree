import React from 'react'
import Header from './common/Header'
import { loremData } from '../utils/helper'
import line from '../assets/images/png/line.png'

const Section4 = () => {
    return (
        <section className='container max-w-[1320px] bg-white pt-[153px] flex justify-center mx-auto pb-[163px] '>
            <div className=' flex flex-wrap justify-center mx-auto  p-2'>
                <div className='w-full lg:w-1/2 p-4  '>
                                        <img src={line } alt="line"></img>
                    
                    <div className=' max-w-[338px] mt-[9px] text-[48px] leading-[130%]  text-black '>
                        <Header title="Explore our latest events" className="" />
                    </div>
                    <p className=' max-w-[543px] font-normal text-[16px] leading-[100%] text-[#000000B2] mt-[12px]  mb-[15px] font-poppin '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu.</p>
                    <a href="/" className='font-bold text-[16px] leading-[100%] font-poppin'>LEARN MORE</a>
                </div>
                <div className="w-full lg:w-1/2  p-4 ">
                    <div className="flex flex-wrap ">
                        {loremData.map((lorem,index) => (
                            <div className="w-full sm:w-1/2  p-2 font-poppin" key = { index }>
                                <div className=" p-3  hover:shadow-lg transition-shadow duration-300 bg-white">
                                    <img src={lorem.img} alt={lorem.title} className="w-full h-auto mb-4" />
                                    <p className='font-normal text-[14px] leading-[100%] text-[#000000B2] m-0 pt-1 font-poppin'>{lorem.date} </p>
                                    <h3 className="text-[24px] leadind-[100%] text-black font-medium font-poppin">{lorem.title}</h3>
                                    <p className='font-normal text-[16px] leading-[100%] text-[#000000B2] m-0 pt-1 pb-2 font-poppin'>{lorem.description}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>

        </section>
    )
}

export default Section4
