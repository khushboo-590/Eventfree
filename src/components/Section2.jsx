import React from 'react'
import videoImg from '../assets/images/png/video-img.png'
import Header from './common/Header'
import { cards } from '../utils/helper'
import line from'../assets/images/png/line.png'

const Section2 = () => {
    return (
        <section className='container max-w-[1320px] bg-white  justify-center mx-auto pt-[137px] pb-[73px]'>
            <div className=' flex flex-wrap justify-center items-center '>
                <div className=' w-full lg:w-1/2 p-2 h-auto justify-center items-center mb-4'>
                    <img src={videoImg} alt="videoImg" className=' pt-5 w-full h-auto'></img>

                </div>
                <div className=' w-full lg:w-1/2 p-2 h-auto  justify-center items-center mb-2'>
                    <img src={line } alt="line"></img>
                    <div className='leading-[100%] mt-[21px] text-[48px] font-poppin "'>
                        <Header title="What make us special ?" />
                    </div>
                    <p className='max-w-[633px] font-normal text-[16px] leading-[100%] mt-[6px] text-[#000000B2] font-poppin '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,</p>
                    <div className="flex flex-wrap justify-center mt-3">
                     
                        <div className="flex flex-wrap justify-center gap-8 py-10">
                            {cards.map((card, index) => (
                                <div key={index} className="group">
                                    <div
                                        className={`relative w-64 p-6 pt-12 text-center rounded-md group-hover:bg-[#2C49FE] transition-all duration-300 text-white border-2 border-[#2C49FE] bg-white text-blue-700`}
                                    >
                                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white border-2 border-[#2C49FE] flex items-center justify-center ">
                                            <img src={card.icon} alt={`${card.title} Icon`} className="w-8 h-8" />
                                        </div>

                                        <h3 className="font-semibold text-lg mb-2 text-[#2C49FE] group-hover:text-white transition-all duration-500 ease-linear">
                                            {card.title}
                                        </h3>
                                        <p className="text-sm  text-[#2D3CAE] group-hover:text-white transition-all duration-500 ease-linear">
                                            {card.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}


export default Section2
