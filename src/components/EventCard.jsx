import React from 'react'
import line from '../assets/images/png/line.png'
import Header from './common/Header'
import { cardEvent } from '../utils/helper'
import calender from '../assets/images/svg/clender.svg'
import location from '../assets/images/svg/location.svg'
import pho from '../assets/images/svg/pho.svg'



const EventCard = () => {
  return (
    <div>
          <div className='bg-white'>
            <div className='container max-w-[1320px] mx-auto p-2 flex justify-center items-center flex-col pt-[68px]'>
                  <img src={line} alt="line"></img>
                  <div className='text-center text-[38px] md:text-[48px]  leading-[100%]  font-poppin  text-black pt-1'>
                      <Header title="Choose your next event" /></div>
                  <div className=" p-2 sm:p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] justify-items-center  mt-2 container mx-auto">
                          {cardEvent.map((item, index) => (
                              <div   key={index}  className="bg-white rounded-[25px] hover:shadow-lg p-4 sm:p-7  border-1 border-[#00000033] hover:border-none " >
                                  <img src={item.image} alt={item.title} className=" object-cover"/>
                                  <h3 className="text-xl font-semibold mt-3">
                                      {item.title}</h3>
                                  <p className="text-base text-gray-600 mt-[17px] flex items-center gap-2 font-normal ">
                                      <img src={calender} alt="calendar" />
                                      {item.date}</p>
                                  <p className="text-base text-gray-600 mt-[17px] flex items-center gap-2 font-normal ">
                                      <img src={location} alt="location" />
                                      {item.location}</p>
                                  <p className="text-base text-gray-600 mt-[17px] flex items-center gap-2 font-normal ">
                                      <img src={pho} alt="pho" />
                                      {item.number} </p>
                                  <button className="mt-[22px] bg-blue-600 text-white px-[28px] py-[11px] rounded-[23px] hover:bg-blue-700 font-semibold">
                                      Go Check
                                  </button>
                              </div>
                          ))}
                      </div>


                      </div>
                  </div>
               
            </div>
      </div>
  )
}

export default EventCard
