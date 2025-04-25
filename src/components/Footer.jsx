import React from 'react'
import logo from '../assets/images/svg/logo.svg'
import insta from '../assets/images/svg/insta.svg'
import face from '../assets/images/svg/face.svg'
import twitter from '../assets/images/svg/twitter.svg'
import { services, events, galleryImages } from '../utils/helper';

const Footer = () => {
  return (
      <section className='bg-black'>
          <div className=' container max-w-[1320px] mx-auto pt-[90px] justify-center p-2'>
          <div className=' flex flex-wrap justify-between '>
                  <div className=' w-full lg:w-1/4 mb-2   '>
                      <img src={logo} alt="logo"></img>
                      <p className=' font-normal text-[14px] leading-[21px] text-white max-w-[346px] mt-[36px] font-poppin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. c </p>
                      <div className=' flex gap-[15px] mt-[24px] pb-[96px] '>
                          <a href="/" className='transition-transform duration-300 hover:scale-110 inline-block'><img src={insta} alt="insta"></img></a>
                          <a href="/" className='transition-transform duration-300 hover:scale-110 inline-block'>  <img src={face} alt="face"></img></a>
                          <a href="/" className='transition-transform duration-300 hover:scale-110 inline-block'> <img src={twitter} alt="twitter"></img></a>

                      </div>
                  </div>
                
                  <div className="w-full lg:w-2/4 mt-8 ">
                      <div className="flex flex-wrap">
                          <div className="w-full md:w-2/8 sm:w-3/12 lg:w-1/4">
                              <ul>
                                  <a href="/" >    <li className="mb-3 text-white text-[14px] font-bold leading-[100%]">SERVICES</li></a>
                                  {services.map((service, index) => (
                                      <a href="/" >    <li key={index} className="my-3 text-white text-[12px] font-normal leading-[100%] mt-4 hover:text-[#2C49FE] font-poppin">
                                          <span>{service.name} </span>
                                      </li></a>
                                  ))}
                              </ul>
                          </div>
                          <div className="w-full smd:w-2/8 sm:w-3/12 lg:w-1/4">
                              <ul>
                                  <a href="/" >       <li className="mb-3 text-white text-[14px] font-bold leading-[100%]">EVENTS</li></a>
                                  {events.map((event, index) => (
                                      <a href="/" >        <li key={index} className="my-3 text-white text-[12px] font-normal leading-[100%] mt-4 hover:text-[#2C49FE] font-poppin">
                                          <span>{event.name}</span>
                                      </li>
                                          </a>
                                  ))}
                              </ul>
                          </div>
                          <div className="w-full md:w-3/8 sm:w-4/8">
                              <h2 className="mb-3  text-white text-[14px] font-bold leading-[100%]">GALLERY</h2>
                              <div className="grid grid-cols-3 gap-x-4 gap-y-3">
                                  {galleryImages.map((image, index) => (
                                      <div key={index} className="mb-3 flex justify-center">
                                          <img src={image.src} alt={image.alt} />
                                      </div>
                                  ))}
                                  <div className="mb-3 bg-[#2D3CAE87] flex justify-center items-center">
                                      <span className="text-xs text-center flex flex-col items-center text-white">
                                          Show
                                          <br />
                                          More
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      </div>
              </div>
              <p className='text-center justify-center flex text-white text-[14px] font-normal leading-[100%]  pb-[25px] font-poppin'>© Credits of companyName belong to companyName.</p>
          </div>
    </section>
  )
}

export default Footer


